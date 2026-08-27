import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="training-page">
      <HeroSlider
        title="Professional"
        highlightText="Training"
        subtitle="Elevate your career with our specialized ZED certification programs."
        images={[process.env.PUBLIC_URL + "/images/training_banner.jpg"]}
        imagePosition="center center"
      />

      {/* Training Cards Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2-gap2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <a href="https://training.zed.org.in/professional/Training/Index/64" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
                  <ExternalLink size={48} />
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>ZED Facilitator</h2>
                <p style={{ color: 'var(--color-gray)', flex: 1 }}>
                  Click to register and explore the comprehensive ZED Facilitator training program on the official portal.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <span className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Enroll Now</span>
                </div>
              </div>
            </a>

            <a href="https://training.zed.org.in/Training/Index/64" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ marginBottom: '1.5rem', color: 'var(--color-gold)' }}>
                  <ExternalLink size={48} />
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-navy)' }}>ZED Assessor and ZED Consultant</h2>
                <p style={{ color: 'var(--color-gray)', flex: 1 }}>
                  Click to register and explore the combined ZED Assessor and Consultant training programs.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <span className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Enroll Now</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
