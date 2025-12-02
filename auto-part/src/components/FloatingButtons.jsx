import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';

function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:8959898809';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('नमस्ते! मुझे आपकी सेवाओं के बारे में जानकारी चाहिए।');
    window.open('https://wa.me/918959898809?text=' + message, '_blank');
  };

  return (
    <>
      <div className="floating-buttons">
        <button className="floating-btn call-btn" onClick={handleCall} title="Call Us">
          📞
        </button>
        <button className="floating-btn whatsapp-btn" onClick={handleWhatsApp} title="WhatsApp">
          💬
        </button>
      </div>
      
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to Top">
          ↑
        </button>
      )}
    </>
  );
}

export default FloatingButtons;