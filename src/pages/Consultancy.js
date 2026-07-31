import React from 'react';
import { Globe, Building, Landmark, CheckCircle2 } from 'lucide-react';
import zedCertification from '../assets/zed-certification.jpeg';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';

const Consultancy = () => {
  return (
    <div className="page-wrapper">
      <HeroSlider
        title="Consultancy Services"
        highlightText="& Expertise"
        subtitle="Expert Certification Processes and Audits Since 2016"
        images={[
          process.env.PUBLIC_URL + "/images/consultancy_banner_1.png",
          process.env.PUBLIC_URL + "/images/consultancy_banner_2.png"
        ]}
        imagePosition="center 55%"
      />

      {/* International */}
      <AnimatedSection duration={0.3} className="section-padding">
        <div className="container">
          <div className="mobile-flex-heading" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Globe size={40} color="var(--color-navy)" className="mobile-icon" />
            <h2 className="mobile-heading-lg" style={{ fontSize: '2.5rem', margin: 0 }}>International Standards</h2>
          </div>
          <TiltCard className="glass-card" style={{ borderLeft: '4px solid var(--color-gold)' }}>
            <h3>ISO 9001:2015</h3>
            <p><strong>International Organization for Standardization</strong></p>
            <p style={{ color: 'var(--color-text)', marginTop: '0.5rem' }}>
              The international standard for a Quality Management System (QMS). PRSECS supports MSMEs in ISO certifications and we have certified Assessors/Consultants in ISO 9001:2015.
            </p>
          </TiltCard>
        </div>
      </AnimatedSection>

      {/* Central Schemes */}
      <AnimatedSection duration={0.3} className="section-padding" style={{ backgroundColor: 'var(--color-gray-light)' }}>
        <div className="container">
          <div className="mobile-flex-heading" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Building size={40} color="var(--color-gold)" className="mobile-icon" />
            <h2 className="mobile-heading-lg" style={{ fontSize: '2.5rem', margin: 0, color: 'var(--color-navy)' }}>Central Schemes (QCI & Gov)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>ZED (QCI)</h3>
              <p><strong>Zero Defect Zero Effect</strong></p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>A certification scheme for MSMEs to encourage the manufacture of high-quality goods with zero defects and zero environmental effect. PRSECS is an <strong>Organizing Partner</strong> with certified assessors and consultants. (Website: zed.msme.gov.in)</p>
            </TiltCard>

            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>GEM OEM (QCI)</h3>
              <p><strong>Government e-Marketplace</strong></p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Verification confirming a business is the actual manufacturer on India's public procurement portal. Our team members work in GEM OEM assessment as an OEM assessor.</p>
            </TiltCard>

            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>NABET (QCI)</h3>
              <p><strong>National Accreditation Board for Education and Training</strong></p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Offers accreditation to schools and training institutes. Our team members have worked in NABET as Assessors.</p>
            </TiltCard>

            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>STP (QCI)</h3>
              <p><strong>Sewage Treatment Plant / Sustainable Tourism</strong></p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Validation of environmental infrastructure to comply with green standards. Our team members have worked in STP as Assessors.</p>
            </TiltCard>

            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>LEAN Manufacturing</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>We supported the creation of clusters in Agra and have certified Assessors/Consultants in LEAN projects.</p>
            </TiltCard>

            <TiltCard className="glass-card-dark">
              <h3 style={{ color: 'var(--color-gold)' }}>Skill Development (NSDC)</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Our team works in Skill India/PMKVY as assessors across different skill councils. We consult for Training Centers/Providers.</p>
            </TiltCard>

            <TiltCard className="glass-card-dark" style={{ gridColumn: '1 / -1', flexDirection: 'row', gap: '2rem' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: 'var(--color-gold)' }}>BIS</h3>
                <p>Bureau of Indian Standards (ISI mark) certification.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: 'var(--color-gold)' }}>FSSAI</h3>
                <p>Food Safety and Standards Authority of India certification.</p>
              </div>
            </TiltCard>
          </div>

          <div style={{ display: 'flex', marginTop: '4rem', flexWrap: 'wrap', backgroundColor: 'var(--color-white)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <motion.div
              style={{ flex: '1 1 400px', padding: '3rem', color: 'var(--color-text)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="mobile-heading-lg" style={{ color: 'var(--color-navy)', fontSize: '2rem', marginBottom: '1rem' }}>Unlock Your ZED Certification</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Join the MSME Sustainable (ZED) Certification scheme to manufacture high-quality goods with zero defects and zero environmental impact. As an Organizing Partner, we guide you through the entire process.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <CheckCircle2 color="var(--color-gold)" size={20} />
                  <span>Subsidies up to 80% on Certification</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <CheckCircle2 color="var(--color-gold)" size={20} />
                  <span>Financial Assistance up to Rs. 3 Lakh</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--color-gold)" size={20} />
                  <span>Concessions on Bank Loan Interest Rates</span>
                </li>
              </ul>
              <div style={{ marginTop: '1rem' }}>
                <a href="https://zed.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit Official ZED Portal
                </a>
              </div>
            </motion.div>
            <motion.div
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-navy)', padding: '3rem' }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.0, type: "spring", bounce: 0.2 }}
            >
              <div className="featured-image-wrapper" style={{ maxWidth: '400px', width: '100%' }}>
                <img src={zedCertification} alt="MSME Sustainable ZED Certification" className="featured-image" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* State Level */}
      <AnimatedSection duration={0.3} className="section-padding">
        <div className="container">
          <div className="state-heading-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Landmark size={40} color="var(--color-navy)" className="state-heading-icon" />
            <h2 className="state-heading-text" style={{ fontSize: '2.5rem', margin: 0 }}>State Level: UP DIC</h2>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,247,250,1) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px'
          }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-20px', opacity: 0.03, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
              <Landmark size={300} color="var(--color-navy)" />
            </div>

            <div className="tus-card-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(212, 175, 55, 0.15)', paddingBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(212, 175, 55, 0.15)', borderRadius: '16px', display: 'flex' }}>
                <Landmark size={36} color="var(--color-gold)" className="tus-card-icon" />
              </div>
              <h3 className="tus-card-title" style={{ margin: 0, fontSize: '2.2rem', color: 'var(--color-navy)' }}>The Upgradation Scheme (TUS)</h3>
            </div>

            <p style={{ marginBottom: '2rem', color: 'var(--color-text)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px' }}>
              Run by the Department of MSME & Export Promotion, Uttar Pradesh, through local DICs. The objective is to help MSMEs upgrade technology, improve quality, and adopt green practices.
            </p>

            <h4 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '0.5px' }}>Key Financial Benefits we help you secure:</h4>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
              {[
                { title: "Capital Subsidy", desc: "Up to 50% assistance (max ₹5 Lakh) on plant & machinery." },
                { title: "Interest Subsidy", desc: "50% subvention on loans (max ₹1 Lakh/yr for 5 yrs)." },
                { title: "ERP Implementation", desc: "50% cost covered (up to ₹1 Lakh)." },
                { title: "IPR & Branding", desc: "50% reimbursement for trademark (max ₹2 Lakh) & marketing (max ₹1 Lakh)." },
                { title: "Certifications", desc: "Financial assistance for obtaining BIS, FSSAI, or ZED." }
              ].map((benefit, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 8, 41, 0.05)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                  cursor: 'default'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ background: 'var(--color-navy)', padding: '0.6rem', borderRadius: '50%', display: 'flex', flexShrink: 0 }}>
                    <CheckCircle2 color="var(--color-gold)" size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-navy)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>{benefit.title}</strong>
                    <span style={{ color: 'var(--color-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>{benefit.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Consultancy;
