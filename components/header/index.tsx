"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <img src="img/logo-fimesoft_prev_ui.png" alt='logo' width={200} />
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;