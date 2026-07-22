import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Zap, Factory, Award, Building, Activity, SunMedium, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import consultancyBanner from '../assets/consultancy-banner.png';

const CountUpAnimation = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSlider 
        isFullScreen={true}
        title={<>Empowering <span className="highlight" style={{ fontStyle: 'italic' }}>Sustainable</span> Growth<br/>& Quality Excellence</>}
        highlightText=""
        subtitle="PR Solar Enterprise & Consultancy Service (PRSEC) provides state-of-the-art solar energy solutions and premium business certification consultancy. From 1KW to 10MW solar projects to complete ZED, ISO, and BIS certifications."
        images={[
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
          consultancyBanner
        ]}
      >
        <Link to="/products" className="btn-primary">
          Explore Solar Solutions <Zap size={20} />
        </Link>
        <Link to="/consultancy" className="btn-outline">
          View Consultancy Services <ShieldCheck size={20} />
        </Link>
      </HeroSlider>

      {/* Stats/Highlights Section */}
      <section style={{ padding: '3rem 0', backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', marginTop: '-2px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <Building size={40} color="var(--color-gold)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="stats-number" style={{ color: 'var(--color-white)', margin: '0 0 0.5rem' }}>
              <CountUpAnimation end={2016} duration={1.5} />
            </h2>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>Consultancy Established</p>
          </div>
          <div>
            <Factory size={40} color="var(--color-gold)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="stats-number" style={{ color: 'var(--color-white)', margin: '0 0 0.5rem' }}>
              <CountUpAnimation end={75} duration={2} suffix="MW" />
            </h2>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>PV Module Production Capacity</p>
          </div>
          <div>
            <Users size={40} color="var(--color-gold)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="stats-number" style={{ color: 'var(--color-white)', margin: '0 0 0.5rem' }}>
              <CountUpAnimation end={15} duration={1.8} suffix="+" />
            </h2>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>Years Exp. Auditors/Assessors</p>
          </div>
          <div>
            <Activity size={40} color="var(--color-gold)" style={{ margin: '0 auto 1rem' }} />
            <h2 className="stats-number" style={{ color: 'var(--color-white)', margin: '0 0 0.5rem' }}>
              <CountUpAnimation end={25} duration={2.2} suffix="+" />
            </h2>
            <p style={{ color: 'var(--color-gray-light)', fontSize: '0.9rem' }}>Years Module Life Cycle</p>
          </div>
        </div>
      </section>

      {/* Dual Core Pillars Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Our Dual Expertise</h2>
            <p style={{ color: 'var(--color-text)', maxWidth: '600px', margin: '0 auto' }}>
              We operate on two powerful fronts: providing end-to-end solar infrastructure and driving MSME quality excellence through government and international certifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {/* Pillar 1: Solar */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <SunMedium size={48} color="var(--color-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Solar Enterprise</h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '2rem' }}>
                Manufacturing premium MONO PERC and Polycrystalline PV modules and executing Turnkey EPC projects for domestic, institutional, and industrial sectors. 
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> 1KW to 10MW System Capacities</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> On-Grid, Off-Grid & Hybrid Setups</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> Solar Street Lights & Ground Mounting</li>
              </ul>
              <Link to="/products" style={{ color: 'var(--color-navy-light)', fontWeight: '600', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Products <ArrowRight size={18} />
              </Link>
            </div>

            {/* Pillar 2: Consultancy */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <ShieldCheck size={48} color="var(--color-gold)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Certification Consultancy</h3>
              <p style={{ color: 'var(--color-text)', marginBottom: '2rem' }}>
                Acting as an Organizing Partner and providing certified assessors for major MSME schemes to boost quality, reduce defects, and secure financial subsidies.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> ISO 9001:2015 & BIS & FSSAI</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> ZED (Zero Defect Zero Effect) QCI</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Award size={18} color="var(--color-navy)" /> UP DIC Technical Upgradation Scheme</li>
              </ul>
              <Link to="/consultancy" style={{ color: 'var(--color-navy-light)', fontWeight: '600', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View All Certifications <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem' }}>Trusted By Esteemed Organizations</h2>
          <div className="clients-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
            <div className="glass-card scan-line-card" style={{ padding: '2rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ margin: 0, color: 'var(--color-navy-dark)', fontSize: '1.2rem' }}>Power Grid Corporation<br/>Of India Limited</h3>
            </div>
            <div className="glass-card scan-line-card" style={{ padding: '2rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ margin: 0, color: 'var(--color-navy-dark)', fontSize: '1.2rem' }}>Kendriya Vidyalaya<br/>Sangathan (KVS)</h3>
            </div>
            <div className="glass-card scan-line-card" style={{ padding: '2rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ margin: 0, color: 'var(--color-navy-dark)', fontSize: '1.2rem' }}>Punjab Agricultural<br/>University, Ludhiana</h3>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
