import { Knex } from "knex";


const TABLE_NAME = 'list_entries';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigIncrements('list_entry_id').primary().notNullable();
        tableBuilder.bigInteger('game_id').references('game_id').inTable('games').onDelete('CASCADE');
        tableBuilder.bigInteger('list_id').references('list_id').inTable('lists').onDelete('CASCADE');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}


