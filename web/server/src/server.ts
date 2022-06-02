// esse serve é o primeiro arquivo aberta para executar o nosso servidor tudo vai partir dele
// e é nele que vamos definir as rotas da aplicação

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express()


app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3000); // faz nossa aplicação ouvir um endereço http  
                  // a padrão é a 80 mas n pode usar 

// rota é o endereço da nossa aplicação localhost/user
// recurso é o que vem depois do endereço o recurso que eu estou acessando atraves da rota que foi definida
// dentro de uma api no backend nos temos metodos de requisiçoes http 
// get buscar informaçoes 
// post // adicionar informaçoes ou criar uma nova informação 
   // essa informação será mandada atraves do corpo da pagina para o backend
// put alterar uma informação 
// o navegador sempre acessa um endereço usando o metodo get ele so entende get 
 
// request

// Corpo (Request Body): Dados para criação ou atualização de um registro
   // esses dados são fornecidos pelo usuario atraves de forms
// Route Params: identificar qual recurso eu quero atualizar ou deletar
  // como eu quero atualizar ou deletar é informação especifica
  // serve pra identificar qual recurso eu quero atu ou delet
  //ex: '/users/:id' - colocamos :id para identificar que é um parametro de rota não um recurso
// Query Params: paginação, filtros, ordenação
 // ex: /users/?page=2&sort=name  - suponha que temos 20 usuarios por pagina quero pegar da pagina 2 e quero ordenar por nome
// app.post('/users', (request, response) => {
//     console.log( request.body, request.params, request.query)

//    response.json([{userID: '123121' , userNam: 'enzo'},
//      {userID: '987311' , userNam: 'pedro'},
//      {userID: '111111' , userNam: 'gusta'}],
//      )

    
//  })