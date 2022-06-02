import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


// modulo de roteamento do express
 // extraindo o modulo de rotas do express
 // para uma variavel pra n ter que usar direto app
const routes = express.Router();
// primeiro c maiusculo pq vai ser uma instancia
const classesController = new ClassesController();
const connectionsController = new ConnectionsController
// controller serve pra abstrair a rota em outro arquivo

// criar uma nova aula
routes.post('/classes', classesController.create );

// lista as aulas
routes.get('/classes', classesController.index );

// cria uma nova conexão
routes.post('/connections', connectionsController.create)

// lista as conexões
routes.get('/connections', connectionsController.index)


 export default routes;
// routes.post('/users', (request, response) => {
//     console.log( request.body, request.params, request.query)

//    response.json([{userID: '123121' , userNam: 'enzo'},
//      {userID: '987311' , userNam: 'pedro'},
//      {userID: '111111' , userNam: 'gusta'}],
//      )

    
//  });
