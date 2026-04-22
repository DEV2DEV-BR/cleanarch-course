"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name");
        table.string("email");
    });
}
async function down(knex) {
    return knex.schema.dropTable("users");
}
//# sourceMappingURL=20260422140000_create_users.js.map