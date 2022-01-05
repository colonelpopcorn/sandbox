import { Knex } from "knex";


const TABLE_NAME = 'lists';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTableIfNotExists(TABLE_NAME, (tableBuilder) => {
        tableBuilder.bigIncrements('list_id').primary().notNullable();
        tableBuilder.bigInteger('user_id').references('user_id').inTable('users').onDelete('CASCADE');
        tableBuilder.string('list_name').notNullable().defaultTo('');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(TABLE_NAME);
}
