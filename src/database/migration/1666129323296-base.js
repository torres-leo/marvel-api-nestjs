const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class base1666129323296 {
    name = 'base1666129323296'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`delete_at\` \`delete_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`delete_at\` \`delete_at\` datetime(6) NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`delete_at\` \`delete_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`delete_at\` \`delete_at\` datetime(6) NULL DEFAULT 'NULL'`);
    }
}
