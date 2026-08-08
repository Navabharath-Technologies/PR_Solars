import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const zedImages = [
    '/images/gallery/zed-1.jpeg',
    '/images/gallery/zed-2.jpeg',
    '/images/gallery/zed-3.jpeg',
    '/images/gallery/zed-4.jpeg',
    '/images/gallery/zed-5.jpeg',
    '/images/gallery/zed-6.jpeg',
    '/images/gallery/zed-7.jpeg',
    '/images/gallery/zed-8.jpeg',
    '/images/gallery/zed-9.jpeg',
    '/images/gallery/chatgpt-1.png',
    '/images/gallery/chatgpt-2.png',
    '/images/gallery/chatgpt-3.png',
    '/images/gallery/chatgpt-4.png'
  ];

  const zedVideos = [
    'https://drive.google.com/file/d/1M9n1EzL2vIZD9_D248Rfs5XkRnvlun5W/preview',
    'https://drive.google.com/file/d/1LhyRuEhweSvV3XebRqSD-K1Pwz1zvt-_/preview',
  ];



  return (
    <div className="page-wrapper">
      <HeroSlider
        title="Media & Gallery"
        subtitle="Highlights from our recent events and initiatives"
        images={[process.env.PUBLIC_URL + "/images/gallery_banner.png"]}
        imagePosition="center center"
      />

      <section className="gallery-section">
        <div className="container">
          <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-navy)', marginBottom: '15px', fontWeight: '700' }}>ZED Awareness Programme</h2>
            <div className="title-underline" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-orange)', margin: '0 auto 20px', borderRadius: '4px' }}></div>
            <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>Glimpses from the Zero Defect Zero Effect (ZED) initiative, showcasing our commitment to quality and environmental impact.</p>
          </div>

          <div className="gallery-grid">
            {zedImages.map((src, index) => (
              <motion.div 
                key={index} 
                className="gallery-item image-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.15 }}
                onClick={() => setSelectedImage(process.env.PUBLIC_URL + src)}
              >
                <div className="image-overlay">
                  <ZoomIn size={48} color="white" />
                </div>
                <img 
                  src={process.env.PUBLIC_URL + src} 
                  alt={`ZED Programme ${index + 1}`} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/600x400/00244d/ffffff?text=ZED+Image+Placeholder'
                  }} 
                />
              </motion.div>
            ))}
          </div>

          {/* Videos Section */}
          <div className="video-section-header" style={{ textAlign: 'center', margin: '80px 0 40px' }}>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy)', marginBottom: '15px', fontWeight: '600' }}>Video Highlights</h2>
            <div className="title-underline" style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-orange)', margin: '0 auto', borderRadius: '4px' }}></div>
          </div>

          <div className="video-grid">
            {zedVideos.map((src, index) => (
              <motion.div 
                key={index} 
                className="gallery-item video-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 36, 77, 0.2)" }}
              >
                <iframe 
                  src={src} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', display: 'block', borderRadius: '16px' }}
                  allow="autoplay"
                  title={`ZED Video ${index + 1}`}
                ></iframe>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="lightbox-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
