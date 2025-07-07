import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function ProtectedLayout() {
  return (
    <div className="wrapper">
      <div id="content">
        <Header />
        <main className="p-4">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
