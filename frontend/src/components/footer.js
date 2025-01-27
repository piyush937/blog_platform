import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Bloganza.</p>
      <div className="footer-links">
        <a href="https://github.com/piyush937/blog_platform/tree/master" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
