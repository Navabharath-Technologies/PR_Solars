import React from 'react';
import { Target, Eye, Factory, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '40vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop" 
          alt="Business Meeting" 
          className="hero-bg" 
        />
        <div className="container hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem' }}>About PRSEC</h1>
          <p>Excellence in Solar Energy and Business Consultancy</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 style={{ color: 'var(--color-navy)', fontSize: '2.5rem' }}>Our History</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                <strong>PR Solar Enterprise & Consultancy Service</strong> established its roots in business consultancy in <strong>2016</strong>, offering unparalleled guidance in certification processes and audits. 
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text)' }}>
                In <strong>2022</strong>, driven by a vision for a greener future, we established our solar enterprise. Today, we are a leading provider of solar equipment and EPC services, handling domestic, institutional, and industrial projects ranging from <strong>1KW to 10MW</strong>.
              </p>
            </motion.div>
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Factory size={40} color="var(--color-gold)" />
                <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Manufacturing Power</h3>
              </div>
              <p style={{ color: 'var(--color-text)' }}>
                We pride ourselves on an exceptional production capacity of <strong>75MW</strong>. Our cutting-edge facility produces high-quality PV modules using premium MONO PERC and Polycrystalline (DCR and Non-DCR) solar cells. 
              </p>
              <ul style={{ marginTop: '1.5rem', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Award size={20} color="var(--color-gold)" /> <span>Module range: 155W to 395W</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Award size={20} color="var(--color-gold)" /> <span>Extensive quality checks</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} color="var(--color-gold)" /> <span>Life cycle of greater than 25 years</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-light)' }}>
        <div className="container grid-2-gap2">
          <motion.div 
            className="glass-card-dark"
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ perspective: "1000px" }}
          >
            <Target size={48} color="var(--color-gold)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ color: 'var(--color-gold)' }}>Our Mission</h2>
            <p>
              To provide the best services and products to our customers as per their requirements. We aim to spread the message of solar energy awareness. Through our dedication to stakeholders, we strive for non-stop development and utmost purchaser satisfaction. 
            </p>
            <p style={{ marginTop: '1rem' }}>
              We are committed to offering reliable, long-lasting sun strength gadgets. Additionally, we spread crucial knowledge regarding certifications and audits to all MSMEs, supporting them to become competent on a national and international level.
            </p>
          </motion.div>
          <motion.div 
            className="glass-card-dark"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ perspective: "1000px" }}
          >
            <Eye size={48} color="var(--color-gold)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ color: 'var(--color-gold)' }}>Our Vision</h2>
            <p>
              To reduce power dependency on non-renewable energy sources. Our vision is to offer highly effective, reasonably priced, and sustainable electricity solutions across all markets.
            </p>
            <p style={{ marginTop: '1rem' }}>
              By decreasing the carbon footprint, we are paving the way for sustainable electricity, thereby enhancing the gift and destiny of human life. We aim to empower one billion lives through modern electricity answers while making MSMEs aware of product quality on international platforms.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
