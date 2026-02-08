import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Elements - Removed for solid background */}

      <Header />
      
      <main className="relative z-10 pb-32 pt-20 px-5 max-w-lg mx-auto">
        <Outlet />
      </main>
      
      <Navigation />
    </div>
  );
};
