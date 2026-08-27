import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <HeroSlider
        title="Get in"
        highlightText="Touch"
        subtitle="We're here to help you power the future."
        images={[process.env.PUBLIC_URL + "/images/contact_banner.png"]}
        imagePosition="center 63%"
      />

      <section className="section-padding">
        <div className="container grid-2-gap2">

          {/* Contact Info */}
          <div>
            <h2 className="mobile-heading-lg" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Information</h2>
            <p style={{ color: 'var(--color-gray)', marginBottom: '2.5rem' }}>
              Reach out to PR Solar Enterprise & Consultancy Service for any inquiries regarding solar installations, product manufacturing, or certification audits.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-navy-light)', borderRadius: '8px', color: 'var(--color-gold)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Corporate Office</h3>
                  <p style={{ color: 'var(--color-text)' }}>1101, Kanchanjunga Tower, Shastripuram Heights,<br />Agra, Uttar Pradesh, 282007</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-navy-light)', borderRadius: '8px', color: 'var(--color-gold)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Phone Numbers</h3>
                  <p style={{ color: 'var(--color-text)' }}>+91 80775 85201</p>
                  <p style={{ color: 'var(--color-text)' }}>+91 8218416906</p>
                  <p style={{ color: 'var(--color-text)' }}>+91 9927833340</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-navy-light)', borderRadius: '8px', color: 'var(--color-gold)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email Addresses</h3>
                  <p style={{ color: 'var(--color-text)' }}>sales@prsecs.com</p>
                  <p style={{ color: 'var(--color-text)' }}>yogendrabhasker@prsecs.com</p>
                  <p style={{ color: 'var(--color-text)' }}>satishnigam@prsecs.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-navy-light)', borderRadius: '8px', color: 'var(--color-gold)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Working Hours</h3>
                  <p style={{ color: 'var(--color-text)' }}>Monday – Saturday: 8:00 AM – 5:00 PM</p>
                  <p style={{ color: 'var(--color-text)' }}>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form and Map */}
          <div>
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                <input type="text" placeholder="Subject" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                <textarea placeholder="Your Message" rows="4" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                <button type="button" className="btn-primary" style={{ justifyContent: 'center' }}>Submit Message</button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', width: '100%', backgroundColor: '#e2e8f0' }}>
        <iframe
          title="PRSECS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4!2d77.94!3d27.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477ef11eb5637%3A0x81852c0f54f1ee86!2sShastripuram%20Heights!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;
