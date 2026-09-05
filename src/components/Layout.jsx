import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-sans antialiased">
      {children}
    </div>
  );
};

export default Layout;