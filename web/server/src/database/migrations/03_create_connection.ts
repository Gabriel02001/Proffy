import { knex, Knex } from 'knex';

// tabela de conexão 
 // para termos registros de conexões entre aluno e professor 
  // informação se o usuario tentou entrar em contato com o professor
  // quando o usuario apertar no botão de wtzap a gente já salva nessa tabela
export async function up(knex: Knex) {  // altero o banco 
  return knex.schema.createTable('connections', table => { // cria tabela
    table.increments('id').primary();
   
  
    // houve uma conexão com qual professor
     // quando tentar entrar em contato essa tabela vai registrar o id do professor e o horario
    table.integer('user_id') // 
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE') //
    .onDelete('CASCADE'); //    
    
    // e quando foi feita essa tentativa de conexão
    // verifica quando essa conexão foi criada
    table.timestamp('created_at')
    .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // pega o horario atual que esse registro está sendo criado
    .notNullable();
});
}

export async function down(knex: Knex) {  // desfaço a alteração
  return knex.schema.dropTable('connections');
}