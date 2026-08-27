import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid" style={{ marginBottom: '2rem' }}>
        
        {/* Brand & Mission */}
        <div>
          <Link to="/" className="logo-text" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="PRSECS Logo" style={{ height: '90px' }} />
          </Link>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
            Empowering sustainable growth and quality excellence through premium solar solutions and professional certification consultancy since 2016.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="https://www.facebook.com/prsecs" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FaFacebookF size={18} /></a>
            <a href="https://x.com/prsolarenter" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)"><FaXTwitter size={18} /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'var(--color-white)', fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem 1rem' }}>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/products" className="footer-link">Solar Solutions</Link></li>
            <li><Link to="/consultancy" className="footer-link">Consultancy Services</Link></li>
            <li><Link to="/team" className="footer-link">Our Team</Link></li>
            <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
            <li><Link to="/careers" className="footer-link">Careers</Link></li>
            <li><Link to="/training" className="footer-link">Training</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ color: 'var(--color-white)', fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
              <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>1101, Kanchanjunga Tower, Shastripuram Heights, Agra-282007</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
              <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>+91 80775 85201</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
              <Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>sales@prsecs.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PR Solar Enterprise & Consultancy Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
