import { prisma } from '../lib/prisma';

async function listUsers() {
    console.log('All users in database:\n');

    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            createdAt: true,
            _count: {
                select: {
                    assets: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    if (users.length === 0) {
        console.log('No users found');
    } else {
        users.forEach((user, index) => {
            console.log(`${index + 1}. Email: ${user.email}`);
            console.log(`   ID: ${user.id}`);
            console.log(`   Created: ${user.createdAt}`);
            console.log(`   Assets: ${user._count.assets}`);
            console.log('');
        });
    }

    await prisma.$disconnect();
}

listUsers().catch(console.error);
