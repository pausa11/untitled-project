import { prisma } from '../lib/prisma';

async function checkDuplicateUsers() {
    console.log('Checking for duplicate users...\n');

    // Get all users
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            createdAt: true,
        },
        orderBy: {
            email: 'asc',
        },
    });

    console.log(`Total users in database: ${users.length}\n`);

    // Group by email
    const emailMap = new Map<string, typeof users>();
    users.forEach(user => {
        const existing = emailMap.get(user.email) || [];
        existing.push(user);
        emailMap.set(user.email, existing);
    });

    // Find duplicates
    const duplicates = Array.from(emailMap.entries()).filter(([_, users]) => users.length > 1);

    if (duplicates.length === 0) {
        console.log('✓ No duplicate emails found');
    } else {
        console.log(`✗ Found ${duplicates.length} duplicate email(s):\n`);
        duplicates.forEach(([email, users]) => {
            console.log(`Email: ${email}`);
            users.forEach(user => {
                console.log(`  - ID: ${user.id}`);
                console.log(`    Created: ${user.createdAt}`);
            });
            console.log('');
        });
    }

    await prisma.$disconnect();
}

checkDuplicateUsers().catch(console.error);
