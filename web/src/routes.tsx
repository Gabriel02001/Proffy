import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'  // erro alguns modulos com typescript não são feitos
import {Landing} from './pages/Landing';
import {TeacherForm} from './pages/TeacherForm'; // n precisa do index 
import {TeacherList} from './pages/TeacherList';
                                      // com a tipagem do typescript 
                    // BrowserRoute  precisa ficar em volta das rotas de navegação
export function AppRoutes(){     
    return(
        <BrowserRouter>  
         <Routes>
           <Route path="/" element ={<Landing /> } />
           <Route path="/study" element ={<TeacherList /> } />
           <Route path="/give-classes" element ={<TeacherForm/>} />
         </Routes>  
        </BrowserRouter>
    );
}