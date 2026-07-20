import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: (isHome && !scrolled) ? 'transparent' : 'var(--color-navy)',
    position: isHome ? 'fixed' : 'sticky',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    boxShadow: (isHome && !scrolled) ? 'none' : '0 4px 20px rgba(0,0,0,0.1)'
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <a href="/" className="logo-text">
          <img src="https://www.prsecs.com/uploads/settings/1775539126.webp" alt="PRSEC Logo" style={{ height: '50px' }} />
        </a>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Solar Solutions</NavLink>
          <NavLink to="/consultancy">Consultancy</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
