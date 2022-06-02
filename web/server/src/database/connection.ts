// import knex from 'Knex';  // lib
// import path from 'path';  // modulo node

// // precisamos de uma forma de conseguir controlar as alteraçoes que são feitas no banco de dados 
//   //ex: imagina duas pessas trabalhando no mesmo projeto e usando o mesmo banco
//   // as pessoas podem criar novas tabelas deletar tabelas criar novos campos
//   // alterar o tipo .. mudam como o banco se comporta

// // migrations - controlam a versão do banco de dados
//  //  usando migrations a outra pessoa so precisa executar as migrations dentro do knex
//  //  e automaticamente ele vai identificar o que foi modificado e o que não foi

// const db = knex({  // função knex que a gente importa
//     client: 'sqlite3',  // como node aceita varios banco devemos definir qual vamos utilizar
//     connection: { // conexão com banco, indica onde fica o banco dentro do node
//         filename: path.resolve(__dirname, 'database.sqlite')  // lidar com caminhos dentro do node modulo integrado dentro do node para direcionar caminhos dentro do node
//     },                                                                                                               // dirname é o caminho absoluto ou diretorio atual ou o caminho do arquivo que executa o _dirname
//    useNullAsDefault: true,   // informa para o banco que ele deve adicionar null a campos não preenchidos no banco    // segundo parametro é o arquivo que vamos criar nesse caminho
// });                                                                                                                // com path.resolve n precisamos colocar barras isso é bom pq no linux e no windows usam barras de forma diferente
// export default db;                               

import knex from "knex";
import path from "path";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },

  useNullAsDefault: true,
});

export default db;