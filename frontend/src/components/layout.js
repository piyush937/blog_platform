import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css'; // Add layout-specific styles here

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
