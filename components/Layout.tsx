import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground font-sans">
      <Sidebar />
      <main className="flex-1 md:ml-64 w-full max-w-4xl mx-auto px-6 py-10 md:py-20 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default Layout;