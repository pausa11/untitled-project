import { prisma } from '../lib/prisma';

async function cleanupDatabase() {
    console.log('🗑️  Starting database cleanup...\n');

    try {
        // Delete all assets first (due to foreign key constraint)
        const deletedAssets = await prisma.asset.deleteMany({});
        console.log(`✓ Deleted ${deletedAssets.count} asset(s)`);

        // Delete all financial records
        const deletedRecords = await prisma.financialRecord.deleteMany({});
        console.log(`✓ Deleted ${deletedRecords.count} financial record(s)`);

        // Delete all users
        const deletedUsers = await prisma.user.deleteMany({});
        console.log(`✓ Deleted ${deletedUsers.count} user(s)`);

        console.log('\n✅ Database cleanup completed successfully!');
        console.log('Users will be recreated automatically on next login with correct Supabase IDs.\n');
    } catch (error) {
        console.error('❌ Error during cleanup:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

cleanupDatabase().catch(console.error);
