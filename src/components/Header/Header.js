import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <a href="#">Neel Bhate</a>
      </div>
      <nav className="header-nav">
        <a href="#">About Me</a>
        <a href="#">Experiences</a>
        <a href="#">Projects</a>
        <a href="#">Socials</a>
      </nav>
    </header>
  );
}

export default Header;
