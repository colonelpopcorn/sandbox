import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").truncate();

    // Inserts seed entries
    await knex("users").insert([
        { username: "admin", email: 'jonathanling@shamrocksweb.com', password: 'password123*..' }
    ]);
};
