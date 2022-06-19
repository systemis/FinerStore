import React from 'react';
import Header from '../components/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='app-layout'>
      <Header />
      {children}
    </div>
  );
}

export default Layout; 