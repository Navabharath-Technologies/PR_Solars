import React from 'react';
import { Phone, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyWidgets = () => {
  return (
    <div className="sticky-widgets">
      <Link to="/contact" className="sticky-btn">
        <Phone size={20} />
        <span>Contact Us</span>
      </Link>
      <Link to="/consultancy" className="sticky-btn">
        <Info size={20} />
        <span>Get ZED</span>
      </Link>
    </div>
  );
};

export default StickyWidgets;
