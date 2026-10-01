import React, { useState } from 'react';
import { Globe, Building, Landmark, CheckCircle2, Send, CheckCircle } from 'lucide-react';
import zedCertification from '../assets/zed-certification.jpeg';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';

const Consultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Matches any character repeated 4 or more times consecutively
    const noRepeatsRegex = /(.)\1{3,}/; 

    // Name validation
    if (formData.name.trim().length < 3) {
      return "Name must be at least 3 letters long.";
    }
    if (noRepeatsRegex.test(formData.name)) {
      return "Name cannot contain the same letter repeated 4 or more times.";
    }

    // Email validation
    if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
      return "Email must be a @gmail.com address.";
    }
    const emailPrefix = formData.email.split("@")[0];
    if (emailPrefix.length < 3) {
      return "Email must have at least 3 characters before @gmail.com.";
    }
    if (noRepeatsRegex.test(formData.email)) {
      return "Email cannot contain the same letter repeated 4 or more times.";
    }

    if (formData.message.trim().length < 10) {
      return "Feedback message must be at least 10 characters long.";
    }

    return null; // Valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = new FormData();
    data.append("subject", `New Feedback from: ${formData.name}`);
    
    // Forminit free tier hides text fields in the email body.
    // WORKAROUND: We pack all the text data into a .txt file
    const detailsText = `
FEEDBACK DETAILS
-----------------
Name: ${formData.name}
Email: ${formData.email}

MESSAGE:
${formData.message}
    `.trim();

    const detailsBlob = new Blob([detailsText], { type: 'text/plain' });
    data.append("fi-file-feedback-details", detailsBlob, "Feedback_Details.txt");

    try {
      const response = await fetch("https://forminit.com/f/whc3o9o6ak2", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Feedback sent successfully! Thank you for your input.' });
        setFormData({ name: '', email: '', message: '' });
        e.target.reset();
      } else {
        console.error("Forminit API Error: Status", response.status);
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ type: 'error', message: error.message || 'Network error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Feedback Form */}
      <AnimatedSection duration={0.3} className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="glass-card-dark" style={{ padding: '3rem' }}>
              <h2 style={{ color: 'var(--color-gold)', marginBottom: '1rem', textAlign: 'center' }}>Share Your Feedback</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#ccc' }}>We value your input. Please leave your feedback regarding our consultancy services.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Your Feedback *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Write your feedback here..." style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}></textarea>
                </div>

                <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Feedback
                    </>
                  )}
                </button>
                {submitStatus?.type === 'success' && (
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(46, 204, 113, 0.2)', color: '#2ecc71', borderRadius: '5px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={20} />
                    {submitStatus.message}
                  </div>
                )}
                {submitStatus?.type === 'error' && (
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(231, 76, 60, 0.2)', color: '#e74c3c', borderRadius: '5px', textAlign: 'center' }}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Consultancy;
