import React, { useEffect, useState } from 'react';
import { ExternalLink, X, Eye, EyeOff } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Training = () => {
  const [modalState, setModalState] = useState({ isOpen: false, url: '' });
  const [passkey, setPasskey] = useState('');
  const [showPasskey, setShowPasskey] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (e, url) => {
    e.preventDefault();
    setModalState({ isOpen: true, url });
    setPasskey('');
    setError('');
  };

  const handlePasskeySubmit = (e) => {
    e.preventDefault();
    if (passkey === 'admin123') { // Placeholder passkey
      window.open(modalState.url, '_blank', 'noopener,noreferrer');
      setModalState({ isOpen: false, url: '' });
    } else {
      setError('Invalid passkey. Please contact the administrator if you do not have one.');
    }
  };

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
            
            <a href="https://training.zed.org.in/professional/Training/Index/64" onClick={(e) => handleCardClick(e, "https://training.zed.org.in/professional/Training/Index/64")} style={{ textDecoration: 'none' }}>
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

            <a href="https://training.zed.org.in/Training/Index/64" onClick={(e) => handleCardClick(e, "https://training.zed.org.in/Training/Index/64")} style={{ textDecoration: 'none' }}>
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

      {/* Passkey Modal */}
      {modalState.isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000,
          backdropFilter: 'blur(5px)'
        }}>
          <div className="glass-card" style={{ position: 'relative', width: '90%', maxWidth: '400px', padding: '2rem', height: 'auto', minHeight: 'auto' }}>
            <button 
              onClick={() => setModalState({ isOpen: false, url: '' })}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-navy)' }}
            >
              <X size={24} />
            </button>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-navy)', fontSize: '1.5rem', textAlign: 'center' }}>Enter Passkey</h3>
            <p style={{ color: 'var(--color-gray)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem' }}>
              Please enter your passkey to continue. If you don't have a passkey, please contact the administrator.
            </p>
            <form onSubmit={handlePasskeySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPasskey ? "text" : "password"}
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Passkey"
                  style={{ padding: '0.8rem', paddingRight: '2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', width: '100%' }}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPasskey(!showPasskey)}
                  style={{ position: 'absolute', right: '0.8rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray)', display: 'flex', alignItems: 'center' }}
                >
                  {showPasskey ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              {error && <p style={{ color: 'red', fontSize: '0.8rem', margin: 0 }}>{error}</p>}
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;
