import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';

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
          <div className="dropdown">
            <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>
              Careers
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/training" onClick={() => setMenuOpen(false)}>Training</NavLink>
            </div>
          </div>
          <NavLink to="/contact">Contact</NavLink>
          <div className="dropdown" style={{ marginLeft: '10px' }}>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 500, 
              fontSize: '0.75rem', 
              letterSpacing: '1px', 
              textTransform: 'uppercase', 
              cursor: 'pointer', 
              border: '1px solid rgba(255, 255, 255, 0.2)', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              transition: 'all 0.3s ease', 
              backgroundColor: 'rgba(0, 0, 0, 0.15)' 
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}>
              <Lock size={12} />
              Employee Portal
            </span>
            <div className="dropdown-content">
              <a href="https://www.prsecs.com/admin" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Employee Login</a>
              <a href="https://prsecs.com:2096/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Employee Mail</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
