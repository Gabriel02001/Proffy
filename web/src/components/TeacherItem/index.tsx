import React from "react";
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
export interface Teacher{
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    Whatsapp: string;
}
interface TeacherItemProps{
  teacher: Teacher
}
 const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) =>{
     return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt="" />
            <div>
             <strong>{teacher.name}</strong>
             <span>{teacher.subject}</span>
            </div>
        </header>
       <p>
        {teacher.bio}
       </p>
       <footer>
           <p>
               preço/Hora
               <strong>{teacher.cost}</strong>
           </p>
           <a href={`http://wa.me/${teacher.Whatsapp}`}>
                   <img src={whatsappIcon} alt="whatsapp" />
                   Entrar em contato
               </a>
       </footer>
    </article>
     )
 }

 export default TeacherItem