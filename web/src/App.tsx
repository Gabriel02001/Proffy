import React from 'react';

 //import {Landing} from './pages/Landing' quando o nome é index n precisa colocar index ele já busca

import './assets/styles/global.css';

import { AppRoutes } from "./routes";


function App() { // componente função que retorna html
  return (
    <AppRoutes /> // uma tag que fecha nela mesmo
   
  );
}

export default App;
