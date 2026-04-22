import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("appointments", (table) => {
    table.increments("id").primary();
    table.integer("user_id");
    table.timestamp("date");
    table.boolean("canceled").defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("appointments");
}