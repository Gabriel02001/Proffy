
import {Request, Response} from 'express'

import db from '../database/connection';
import converteHourToMinutes from '../utils/convertHourtoMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
  }

export default class ClassesController {
   // listagem das aulas
   async index(request: Request, response: Response){
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

     if(!filters.week_day || !filters.subject || !filters.time)
     {
         return response.status(400).json({
         error: 'Missing filters to search classes'
     })
     }

    const timeInMinutes = converteHourToMinutes(time)
    console.log(timeInMinutes)

    //verifica se existe um horario disponivel

    const classes = await db('classes')
    .whereExists(function() {
      this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
    })
    .where('classes.subject', '=', subject)
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*']);
    
    return response.json(classes);
    }
   
   // criação das tabelas / das aulas
    // aquid dentro a tipagem automatica do express é perdida pq não temos a importação aqui dentro
    async create (request: Request, response: Response){
        console.log( request.body, request.params, request.query)
       const  {
         name,
         avatar,
         whatsapp,
         bio,
         subject,
         cost,
         schedule
        } = request.body;
    
      const trx = await db.transaction();
    
       try{
    // await pois cada ação do banco de dados demora pra acontecer precisamos usar promise
        //insert retorna a lista de id que foram inseridos 
        const insertUsersId =  await trx('users').insert({
          name,
          avatar,
          whatsapp,
          bio,
        })
        
        // ? o ultimo id inserido fica na posição 0 ? ex: [5, 4, 3, 2, 1]
       const user_id = insertUsersId[0]
    
         const insertClassesIds = await trx('classes').insert({
          subject,
          cost,
          user_id,
        })
         
          const class_id = await insertClassesIds[0]
            
            const class_schedule = schedule.map((scheduleItem: ScheduleItem) => {
              return {
               class_id,
               week_day: scheduleItem.week_day,
               from: converteHourToMinutes(scheduleItem.from),
               to: converteHourToMinutes(scheduleItem.to),
              };
            })
    
            await trx('class_schedule').insert(class_schedule);
      
        // apenas neste momento que são feitas as alteraçoes no banco, todo ao mesmo tempo
        await trx.commit();
        return response.status(201).send();
    
       } catch(err){
         await trx.rollback();
    
        return response.status(400).json({
          error: 'Unexpected error while creating new class'
        })
       }
} 
}
