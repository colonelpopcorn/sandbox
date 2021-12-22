import { Knex } from "knex";

const TABLE_NAME = 'steam_apps';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigInteger('steam_id').primary().notNullable().defaultTo(-9999);
        tableBuilder.string('game_name').notNullable().defaultTo('');
        tableBuilder.bigInteger('play_time').notNullable().defaultTo(0);
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}

