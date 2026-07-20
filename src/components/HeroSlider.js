import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const HeroSlider = ({ title, highlightText, subtitle, images, children, isFullScreen = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="hero" style={{ minHeight: isFullScreen ? '100vh' : '40vh' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero Background ${index + 1}`}
          className="hero-bg"
          style={{
            opacity: index === currentIndex ? 0.5 : 0,
            transition: 'opacity 1.5s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            zIndex: 1
          }}
        />
      ))}
      <div className="container hero-content" style={{ 
        textAlign: 'center', 
        zIndex: 2, 
        position: 'relative', 
        paddingTop: isFullScreen ? '150px' : '3rem', 
        paddingBottom: isFullScreen ? '100px' : '3rem' 
      }}>
        <motion.h1 
          style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          {title} <span className="highlight">{highlightText}</span>
        </motion.h1>
        <motion.p 
          style={{ fontSize: '1.2rem', margin: '0 auto', maxWidth: '700px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div 
            style={{ display: 'flex', gap: '1rem', marginTop: '3rem', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSlider;
