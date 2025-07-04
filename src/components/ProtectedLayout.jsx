import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Hearder';

export default function ProtectedLayout() {
  return (
    <div className="wrapper">
      <div id="content">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
