import { Knex } from 'knex';

const TABLE_NAME = 'backlog';

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
    tableBuilder.bigIncrements('game_id', { primaryKey: true });
    tableBuilder.string('game_name').notNullable().defaultTo('');
    tableBuilder.bigInteger('play_time').notNullable().defaultTo(0);
    tableBuilder.bigInteger('time_to_beat').notNullable().defaultTo(0);
    tableBuilder.integer('score_critic').notNullable().defaultTo(0);
    tableBuilder.integer('score_community').notNullable().defaultTo(0);
    tableBuilder.date('release_date').notNullable().defaultTo('1992-07-21');
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists(TABLE_NAME);
}
