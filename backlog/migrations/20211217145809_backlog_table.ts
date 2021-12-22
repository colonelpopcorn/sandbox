import { Knex } from 'knex';

const TABLE_NAME = 'backlog';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
    tableBuilder.bigIncrements('game_id', { primaryKey: true });
    tableBuilder.integer('external_game_id').nullable();
    tableBuilder.string('platform').notNullable().defaultTo('');
    tableBuilder.string('game_name').notNullable().defaultTo('');
    tableBuilder.integer('personal_weight').notNullable().defaultTo(1);
    tableBuilder.integer('time_to_beat_min').notNullable().defaultTo(0);
    tableBuilder.integer('time_to_beat_max').notNullable().defaultTo(999999);
    tableBuilder.integer('score_critic').notNullable().defaultTo(0);
    tableBuilder.integer('score_community').notNullable().defaultTo(0);
    tableBuilder.date('release_date').notNullable().defaultTo('1992-07-21');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(TABLE_NAME);
}
