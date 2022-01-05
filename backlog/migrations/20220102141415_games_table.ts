import { Knex } from "knex";


const TABLE_NAME = 'games';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigIncrements('game_id').primary().notNullable();
        tableBuilder.string('external_game_id').notNullable().defaultTo('');
        tableBuilder.string('external_store_id').notNullable().defaultTo('');
        tableBuilder.string('game_name').notNullable().defaultTo('');
        tableBuilder.integer('critic_rating').notNullable().defaultTo(0)
        tableBuilder.integer('community_rating').notNullable().defaultTo(0);
        tableBuilder.date('release_date').notNullable().defaultTo(0);
        tableBuilder.integer('how_long_to_beat_min').notNullable().defaultTo(0);
        tableBuilder.integer('how_long_to_beat_max').notNullable().defaultTo(0);
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}

