import React from 'react';
import './Hero.css';

function Hero() {
  const handleContact = () => {
    window.location.href = 'tel:8959898809';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-in-up">
          Pro. Raju Matre
          <br />
          <span className="hero-subtitle">Matro Auto Parts & Auto Garage</span>
        </h1>
        <p className="hero-description slide-in-left">
          Your trusted destination for all two-wheeler parts and complete garage services
        </p>
        <div className="hero-features slide-in-right">
          <div className="feature-item">
            <span className="feature-icon">🔧</span>
            <span>Expert Repairs</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🏍️</span>
            <span>Genuine Parts</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Quick Service</span>
          </div>
        </div>
        <button className="cta-button" onClick={handleContact}>
          📞 Call Now: 8959898809
        </button>
      </div>
      <div className="hero-bikes">
        <div className="bike-animation">🏍️</div>
        <div className="bike-animation">🛵</div>
      </div>
    </section>
  );
}

export default Hero;