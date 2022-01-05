import { Knex } from "knex";


const TABLE_NAME = 'users';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigIncrements('user_id').primary().notNullable();
        tableBuilder.string('username').notNullable().defaultTo('');
        tableBuilder.string('email').notNullable().defaultTo('');
        tableBuilder.string('password').notNullable().defaultTo('');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}

