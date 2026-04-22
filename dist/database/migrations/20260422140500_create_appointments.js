"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    return knex.schema.createTable("appointments", (table) => {
        table.increments("id").primary();
        table.integer("user_id");
        table.timestamp("date");
        table.boolean("canceled").defaultTo(false);
    });
}
async function down(knex) {
    return knex.schema.dropTable("appointments");
}
//# sourceMappingURL=20260422140500_create_appointments.js.map