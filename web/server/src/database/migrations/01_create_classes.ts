import { knex, Knex } from 'knex';

export async function up(knex: Knex) {  // altero o banco 
  return knex.schema.createTable('classes', table => { // cria tabela
    table.increments('id').primary();
    table.string('subject').notNullable();  //  string -> varchar
    table.decimal('cost').notNullable();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE') // o que vai acontecer com o id do usuario salvo na tabela classes
                  // o que vai acontecer se ele acabar sendo alterado 
                   // se p id é alterado lá na tabela dele automaticamente reflete essa informação em todos os lugares que dependem dela
    .onDelete('CASCADE'); // o que acontece caso esse professor seja deletado da plataforma
                             // vai deletar todas as aulas junto se altero  
  });
}

export async function down(knex: Knex) {  // desfaço a alteração
  return knex.schema.dropTable('classes');
}