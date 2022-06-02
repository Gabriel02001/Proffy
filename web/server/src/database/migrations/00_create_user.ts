import { knex, Knex } from 'knex';

export async function up(knex: Knex) {  // altero o banco 
  return knex.schema.createTable('users', table => { // cria tabela
    table.increments('id').primary();
    table.string('name').notNullable();  //  string -> varchar
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {  // desfaço a alteração
  return knex.schema.dropTable('users');
}