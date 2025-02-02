//Header.js


import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
      <div className="header-info">
          Consulting WP<span className="header-bullet"></span>
          New York<span className="header-bullet"></span>
          Privacy Policy
        </div>
        <nav className="header-nav">
          <a href="/services" className="header-link">
            Privacy Policy
            <div className="header-underline"></div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;