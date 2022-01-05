import { Knex } from "knex";


const TABLE_NAME = 'custom_values';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigIncrements('custom_value_id').primary().notNullable();
        tableBuilder.bigInteger('list_entry_id').references('list_entry_id').inTable('list_entries').onDelete('CASCADE');
        tableBuilder.string('custom_value_key').notNullable().defaultTo('');
        tableBuilder.string('custom_value_value').notNullable().defaultTo('');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}


