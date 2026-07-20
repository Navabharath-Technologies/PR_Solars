import React from 'react';
import { User, Award, Briefcase } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Team = () => {
  const leadership = [
    {
      name: "Preeti Manav",
      role: "CEO / Managing Director",
      edu: "MA (History) - University of Agra",
      exp: "15 years experience at 'RJ Plastic Yarn Industry', Nunhai Agra.",
      img: "/images/preeti_manav.png",
      position: "top"
    },
    {
      name: "Rinki Nigam",
      role: "CEO / Managing Director",
      edu: "MA (English) & B.Ed - University of Agra",
      exp: "15 years experience at 'RJ Plastic Yarn Industry', Nunhai Agra.",
      img: "/images/rinki_nigam.png",
      position: "top"
    },
    {
      name: "Satish Kumar Nigam",
      role: "Director / General Manager",
      edu: "B.E (Mech), M.Tech (Manufacturing and Automation)",
      exp: "17 years industry exp. Certified ZED Assessor (2000+ Bronze, 50 Silver, 30 Gold), LEAN consultant (2023), GEM OEM auditor (2021).",
      img: "/images/satish_kumar_nigam.png"
    },
    {
      name: "Yogender Bhaskar",
      role: "Director / General Manager",
      edu: "B.E in ECE",
      exp: "20 years industry experience with extensive co-ordination expertise in various projects.",
      img: "/images/yogendra_bhaskar.jpeg",
      position: "center 30%"
    }
  ];

  const management = [
    { name: "Nitin Yadav", role: "General Manager", img: "/images/nitin_yadav.jpeg" },
    { name: "Neelam Yadav", role: "General Manager", img: "/images/neelam_yadav.png" },
    { name: "Ankit Agrawal", role: "Data Analyst Lead", img: "/images/ankit_agrawal.png" },
    { name: "Anuj Singh", role: "Team Lead", img: "/images/anuj_singh.png" },
    { name: "Atin Manav", role: "Team Lead", img: "/images/atin_manav.png", scale: 2.1, origin: "top" }
  ];

  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '40vh' }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
          alt="Team collaboration"
          className="hero-bg"
        />
        <div className="container hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem' }}>Our Leadership Team</h1>
          <p>15 years experienced Auditors, Assessors, and Consultants</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Board of Directors</h2>
            <p style={{ color: 'var(--color-gray)' }}>Driving PRSEC's vision of quality and sustainability.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {leadership.map((person, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'var(--color-gray-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '3px solid var(--color-gold)', overflow: 'hidden' }}>
                  {person.img ? (
                    <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: person.position || 'center 15%' }} />
                  ) : (
                    <User size={60} color="var(--color-navy-light)" />
                  )}
                </div>
                <h3 style={{ margin: 0 }}>{person.name}</h3>
                <p style={{ color: 'var(--color-gold-dark)', fontWeight: '600', marginBottom: '1rem' }}>{person.role}</p>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>
                  <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', textAlign: 'left' }}>
                    <Award size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-navy)' }} />
                    <span>{person.edu}</span>
                  </p>
                  <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', textAlign: 'left' }}>
                    <Briefcase size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-navy)' }} />
                    <span>{person.exp}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--color-gold)' }}>Management & Leads</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {management.map((person, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card-dark" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', height: '100%' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '2px solid var(--color-gold)', overflow: 'hidden' }}>
                  {person.img ? (
                    <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: person.position || 'center 15%', transform: person.scale ? `scale(${person.scale})` : 'none', transformOrigin: person.origin || 'center center' }} />
                  ) : (
                    <User size={50} color="var(--color-white)" opacity={0.5} />
                  )}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{person.name}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{person.role}</p>
              </div>
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
