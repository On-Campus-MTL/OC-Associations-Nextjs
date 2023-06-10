import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ProSidebar from '@/components/sidebar/ProSidebar';

const Layout = ({ children }) => {
  return (
    <main className='flex flex-row w-full hit'>
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
