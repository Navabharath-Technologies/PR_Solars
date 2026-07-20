import React from 'react';
import { SunMedium, Settings, BatteryCharging, ArrowUpRight, Maximize } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "AC Flood Light",
      icon: <SunMedium size={56} color="var(--color-gold)" />,
      desc: "High-quality LED lights ranging from 30W to 200W with durable aluminum bodies. Models 100W and above feature independent 50W modules with individual drivers for easier maintenance. Fully CE & RoHS certified.",
      img: "/images/ac_flood_light.png"
    },
    {
      title: "AC Street Light",
      icon: <Settings size={56} color="var(--color-gold)" />,
      desc: "Features built-in Lithium-ion batteries and light sensors for automatic 'dusk-to-dawn' functionality. Provides 4 to 5 hours of backup and operates across 110V to 300V, making it ideal for rural installations.",
      img: "/images/ac_street_light.webp"
    },
    {
      title: "Standalone Solar Street Lights",
      icon: <BatteryCharging size={56} color="var(--color-gold)" />,
      desc: "Complete pole-mounted systems combining high-efficiency solar-powered LED lights, advanced MPPT drivers, durable solar panels, and 12V Lithium or Lead batteries for completely off-grid illumination.",
      img: "/images/standalone_solar.webp"
    },
    {
      title: "Top Roof Solar Panel",
      icon: <ArrowUpRight size={56} color="var(--color-gold)" />,
      desc: "Rooftop installations designed specifically to drastically lower high power tariffs for residential homes, commercial units, and industrial facilities, aiming for a fast cost recovery period of 5-7 years.",
      img: "/images/top_roof_solar_panel.webp"
    },
    {
      title: "Ground Mounting Panel",
      icon: <Maximize size={56} color="var(--color-gold)" />,
      desc: "Solar panels installed on the ground using standard or pole mounts. We offer versatile options including single-axis or dual-axis sun-tracking capabilities to maximize energy yield throughout the day.",
      img: "/images/ground_mounting_panel.webp"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="hero" style={{ minHeight: '40vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2000&auto=format&fit=crop" 
          alt="Solar Panels" 
          className="hero-bg" 
        />
        <div className="container hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem' }}>Solar Solutions & Products</h1>
          <p>Premium On-Grid, Off-Grid, and Hybrid Systems</p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-gray-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {products.map((product, idx) => (
              <div key={idx} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', margin: 0, height: '100%' }}>
                    <div style={{ 
                      height: '240px', 
                      width: '100%', 
                      marginBottom: '2rem', 
                      borderRadius: '16px', 
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(0, 8, 41, 0.05))', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '1.5rem',
                      border: '1px solid rgba(212, 175, 55, 0.15)'
                    }}>
                      <img src={product.img} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'darken', filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.15))' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ padding: '0.8rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', display: 'flex' }}>
                        {React.cloneElement(product.icon, { size: 28 })}
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{product.title}</h3>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div style={{ padding: '1rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '16px', display: 'flex', marginBottom: '1.5rem' }}>
                      {React.cloneElement(product.icon, { size: 40, color: 'var(--color-gold)' })}
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>{product.title}</h3>
                    <p style={{ color: 'var(--color-white)', lineHeight: '1.7', opacity: 0.9 }}>{product.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
