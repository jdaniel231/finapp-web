import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Hearder';
import Sidebar from './Sidebar';

export default function ProtectedLayout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div id="content">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}