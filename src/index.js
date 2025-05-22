import React from 'react';
import ReactDOM from 'react-dom/client';  // Corrigido para a nova API
import './index.css';
import AppRouter from './AppRouter';      // Importa o roteador, não mais o App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
