import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const headerStyle = {
    backgroundColor: (isHome && !scrolled && !menuOpen) ? 'transparent' : 'var(--color-navy)',
    position: isHome ? 'fixed' : 'sticky',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    boxShadow: (isHome && !scrolled && !menuOpen) ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
    zIndex: 1000
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <a href="/" className="logo-text">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="PRSECS Logo" style={{ height: '75px' }} />
        </a>
        
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Solar</NavLink>
          <NavLink to="/consultancy">Consultancy</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
