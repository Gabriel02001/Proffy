import { knex, Knex } from 'knex';

// tabela de cronograma 
export async function up(knex: Knex) {  // altero o banco 
  return knex.schema.createTable('class_schedule', table => { // cria tabela
    table.increments('id').primary();
    table.integer('week_day').notNullable();  //  string -> varchar
    table.integer('from').notNullable();
    table.integer('to').notNullable();
   // o professor precisa ter uma flexibilidade para atendar as aulas
     // o dia que ele dá aula 
     // começar a atender x hora ate x horas
     // ele precisa conseguir trocar 
    
    table.integer('class_id') // cronograma precisa estar relacionado com alguma aula
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE') //
    .onDelete('CASCADE'); //                    
  });
}

export async function down(knex: Knex) {  // desfaço a alteração
  return knex.schema.dropTable('class_schedule');
}