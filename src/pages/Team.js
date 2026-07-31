import React from 'react';
import { User, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import HeroSlider from '../components/HeroSlider';
import './Team.css';

const Team = () => {
  const getPerson = (nameToFind, arr1, arr2) => {
    return arr1.find(p => p.name === nameToFind) || arr2.find(p => p.name === nameToFind) || null;
  };

  const leadership = [
    {
      name: "Preeti Manav",
      role: "CEO / Managing Director",
      edu: "MA (History) - University of Agra",
      exp: "15+ years experience at 'RJ Plastic Yarn Industry', Nunhai Agra.",
      img: process.env.PUBLIC_URL + "/images/preeti_manav.png",
      position: "top"
    },
    {
      name: "Rinki Nigam",
      role: "CEO / Managing Director",
      edu: "MA (English) & B.Ed - University of Agra",
      exp: "15+ years experience at 'RJ Plastic Yarn Industry', Nunhai Agra.",
      img: process.env.PUBLIC_URL + "/images/rinki_nigam.png",
      position: "top"
    },
    {
      name: "Satish Kumar Nigam",
      role: "Director / General Manager",
      edu: "B.E (Mech), M.Tech (Manufacturing and Automation)",
      exp: "20+ years industry exp. Certified ZED Assessor (4000+ Bronze), LEAN consultant (2023), GEM OEM auditor (2021).",
      img: process.env.PUBLIC_URL + "/images/satish_kumar_nigam.jpeg"
    },
    {
      name: "Yogender Bhaskar",
      role: "Director / General Manager",
      edu: "B.E in ECE",
      exp: "25+ years industry experience with extensive co-ordination expertise in various projects and Certified ZED Assessor (500+ Bronze).",
      img: process.env.PUBLIC_URL + "/images/yogendra_bhaskar.jpeg",
      position: "center 30%"
    }
  ];

  const management = [
    { name: "Nitin Yadav", role: "General Manager", img: process.env.PUBLIC_URL + "/images/nitin_yadav.jpeg" },
    { name: "Neelam Yadav", role: "General Manager", img: process.env.PUBLIC_URL + "/images/neelam_yadav.png" },
    { name: "Ankit Agrawal", role: "Data Analyst Lead", img: process.env.PUBLIC_URL + "/images/ankit_agrawal.png" },
    { name: "Anuj Singh", role: "Team Lead", img: process.env.PUBLIC_URL + "/images/anuj_singh.png" },
    { name: "Atin Manav", role: "Team Lead", img: process.env.PUBLIC_URL + "/images/atin_manav.png", scale: 2.1, origin: "top" }
  ];

  const renderCard = (person) => {
    if (!person) return null;
    return (
      <div className="org-node glass-card">
        <div className="org-node-img-container">
          {person.img ? (
            <img
              src={person.img}
              alt={person.name}
              className="org-node-img"
              style={{
                objectPosition: person.position || 'center 15%',
                transform: person.scale ? `scale(${person.scale})` : 'none',
                transformOrigin: person.origin || 'center center'
              }}
            />
          ) : (
            <User size={60} color="var(--color-navy-light)" />
          )}
        </div>
        <h3>{person.name}</h3>
        <p className="role">{person.role}</p>
        <div className="details">
          {person.edu && (
            <p>
              <Award size={16} />
              <span>{person.edu}</span>
            </p>
          )}
          {person.exp && (
            <p>
              <Briefcase size={16} />
              <span>{person.exp}</span>
            </p>
          )}
        </div>
      </div>
    );
  };

  // Helper for animated tree nodes and their connecting lines
  const motionProps = (delay) => ({
    initial: { opacity: 0, y: 20, "--line-w": "0%", "--line-h": "0px" },
    whileInView: { opacity: 1, y: 0, "--line-w": "50%", "--line-h": "20px" },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: delay, ease: "easeOut" }
  });

  return (
    <div className="page-wrapper">
      <HeroSlider
        title="Our Leadership"
        highlightText="Team"
        subtitle="15 years experienced Auditors, Assessors, and Consultants"
        images={[process.env.PUBLIC_URL + "/images/team_banner.png"]}
        imagePosition="center 48%"
      />

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>Organizational Structure</h2>
            <p style={{ color: 'var(--color-gray)' }}>Driving PRSECS's vision of quality and sustainability.</p>
          </div>

          <div className="org-tree-container">
            <div className="org-tree">
              <ul>
                {/* LEVEL 1: Top Leadership */}
                <motion.li {...motionProps(0.1)}>
                  <div className="org-node-wrapper">
                    {renderCard(getPerson("Preeti Manav", leadership, management))}
                    {renderCard(getPerson("Rinki Nigam", leadership, management))}
                  </div>

                  <motion.ul {...motionProps(0.2)}>
                    {/* LEVEL 2: Directors */}
                    <motion.li {...motionProps(0.2)}>
                      <div className="org-node-wrapper">
                        {renderCard(getPerson("Yogender Bhaskar", leadership, management))}
                        {renderCard(getPerson("Satish Kumar Nigam", leadership, management))}
                      </div>

                      <motion.ul {...motionProps(0.3)}>
                        {/* LEVEL 3: General Managers */}
                        <motion.li {...motionProps(0.3)}>
                          <div className="org-node-wrapper">
                            {renderCard(getPerson("Nitin Yadav", leadership, management))}
                            {renderCard(getPerson("Neelam Yadav", leadership, management))}
                          </div>

                          <motion.ul {...motionProps(0.4)}>
                            {/* LEVEL 4: Team Leads & Analysts */}
                            <motion.li {...motionProps(0.4)}>
                              <div className="org-node-wrapper" style={{ gap: '1rem' }}>
                                {renderCard(getPerson("Atin Manav", leadership, management))}
                                {renderCard(getPerson("Ankit Agrawal", leadership, management))}
                                {renderCard(getPerson("Anuj Singh", leadership, management))}
                              </div>
                            </motion.li>
                          </motion.ul>

                        </motion.li>
                      </motion.ul>

                    </motion.li>
                  </motion.ul>

                </motion.li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
