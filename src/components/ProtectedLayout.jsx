import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Hearder';
import Sidebar from './Sidebar';

export default function ProtectedLayout() {
  return (
    <div className="d-flex flex-column vh-100"> {/* Exemplo de estrutura com Flexbox */} 
      <Header />
      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Se você tiver uma Sidebar, inclua-a aqui */}
        <Sidebar /> 
        <div className="flex-grow-1 p-3 overflow-auto"> {/* Área para o conteúdo da página */}
          {/* O componente da rota filha (Dashboard, Clients, etc.) será renderizado aqui */}
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

