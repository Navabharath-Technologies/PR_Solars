import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle, Target, Award, Users, LineChart, Database, UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import AnimatedSection from '../components/AnimatedSection';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleApply = (role) => {
    setFormData({ ...formData, role: role });
    document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = new FormData();
    data.append("subject", `New Job Application: ${formData.role} - ${formData.name}`);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("role", formData.role);
    data.append("coverLetter", formData.coverLetter);
    
    if (formData.resume) {
      data.append("fi-file-resume", formData.resume);
    }

    try {
      const response = await fetch("https://forminit.com/f/whc3o9o6ak2", {
        method: "POST",
        body: data
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Application sent successfully! Our HR team will contact you soon.' });
        setFormData({ name: '', email: '', phone: '', role: '', resume: null, coverLetter: '' });
        e.target.reset(); // Clear the file input
      } else {
        console.error("Forminit API Error:", result.message);
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ type: 'error', message: error.message || 'Network error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobs = [
    {
      title: "Auditor",
      description: "Conduct assessments and audits for ZED, GEM OEM, and STP certifications. Ensure compliance with national standards.",
      reqs: ["Experience in quality auditing", "Knowledge of QCI schemes"],
      icon: <Award size={32} color="var(--color-gold)" />
    },
    {
      title: "Consultant",
      description: "Guide MSMEs through LEAN manufacturing and ISO 9001:2015 processes to improve quality and sustainability.",
      reqs: ["Consulting experience in MSME sector", "Deep knowledge of ISO/LEAN"],
      icon: <Target size={32} color="var(--color-gold)" />
    },
    {
      title: "Facilitator",
      description: "Assist businesses in understanding and applying for government schemes like UP DIC and navigating documentation.",
      reqs: ["Excellent communication skills", "Experience with Govt. portals"],
      icon: <Users size={32} color="var(--color-gold)" />
    },
    {
      title: "Business Development Executive",
      description: "Onboard new MSME clients for our consultancy services, including ZED, ISO, and LEAN certifications.",
      reqs: ["BBA/MBA in Marketing", "2+ years in B2B sales"],
      icon: <LineChart size={32} color="var(--color-gold)" />
    },
    {
      title: "Data Analyst",
      description: "Process assessment data, generate audit reports, and ensure data integrity across all QCI and Govt. portals.",
      reqs: ["Proficiency in Excel/SQL", "Detail-oriented mindset"],
      icon: <Database size={32} color="var(--color-gold)" />
    },
    {
      title: "Accountant",
      description: "Manage internal financials, handle project billing, and assist in tracking financial subsidies for client projects.",
      reqs: ["B.Com / Accounting Degree", "Proficiency in Tally/ERP"],
      icon: <Briefcase size={32} color="var(--color-gold)" />
    }
  ];

  return (
    <div className="page-wrapper">
      <HeroSlider
        title="Join Our"
        highlightText="Team"
        subtitle="Help us empower MSMEs and drive sustainable, high-quality manufacturing across India through QCI and ZED certifications."
        images={[process.env.PUBLIC_URL + "/images/careers_banner.png"]}
      />

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Why Work With Us?</h2>
            <p style={{ color: 'var(--color-gray)', maxWidth: '800px', margin: '1rem auto' }}>
              With over 15+ years of experience, PR Solar Enterprise & Consultancy Service is at the forefront of industrial audits and certification consulting. We work closely with government bodies like QCI, NABET, and BIS to raise the bar for Indian manufacturing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {jobs.map((job, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '1rem' }}>{job.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-navy-dark)' }}>{job.title}</h3>
                  <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem', flexGrow: 1 }}>{job.description}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Requirements:</h4>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text)', fontSize: '0.9rem' }}>
                      {job.reqs.map((req, i) => (
                        <li key={i} style={{ marginBottom: '0.3rem' }}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 'auto', width: '100%' }}>
                    <button className="btn-primary" style={{ width: '100%' }} onClick={() => handleApply(job.title)}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Application Form */}
          <div id="application-form" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <AnimatedSection delay={0.2}>
              <div className="glass-card-dark" style={{ padding: '3rem' }}>
                <h2 style={{ color: 'var(--color-gold)', marginBottom: '1rem', textAlign: 'center' }}>Submit Your Application</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#ccc' }}>Fill out the form below to apply. Your application and resume will be sent directly to our HR team.</p>

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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Role Applied For *</label>
                      <select name="role" value={formData.role} onChange={handleChange} required style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                        <option value="" disabled style={{ color: '#000' }}>Select a Role</option>
                        <option value="Auditor" style={{ color: '#000' }}>Auditor</option>
                        <option value="Consultant" style={{ color: '#000' }}>Consultant</option>
                        <option value="Facilitator" style={{ color: '#000' }}>Facilitator</option>
                        <option value="Business Development Executive" style={{ color: '#000' }}>Business Development Executive</option>
                        <option value="Data Analyst" style={{ color: '#000' }}>Data Analyst</option>
                        <option value="Accountant" style={{ color: '#000' }}>Accountant</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Upload Resume *</label>
                    <input type="file" name="resume" onChange={handleChange} required accept=".pdf,.doc,.docx" style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>Cover Letter / Why you? *</label>
                    <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required rows="5" placeholder="Write a brief cover letter explaining why you are a good fit for this role..." style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}></textarea>
                  </div>

                  <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Application
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
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
