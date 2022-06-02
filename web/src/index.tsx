import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(   // injeta uma estrutura dentro do um elemento html, e é possivel manipular apartir do javascript 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


