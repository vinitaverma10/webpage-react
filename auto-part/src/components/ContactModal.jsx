import React, { useState } from 'react';
import './ContactModal.css';

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '8959898809';
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('नमस्ते! मुझे आपकी सेवाओं के बारे में जानकारी चाहिए।');
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSMS = () => {
    const message = encodeURIComponent('नमस्ते! मुझे आपकी सेवाओं के बारे में जानकारी चाहिए।');
    window.location.href = `sms:${phoneNumber}?body=${message}`;
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch for all your two-wheeler needs
          </p>
          
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p className="contact-detail">{phoneNumber}</p>
              <button className="contact-btn" onClick={handleCall}>
                Call Now
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p className="contact-detail">Chat with us</p>
              <button className="contact-btn whatsapp" onClick={handleWhatsApp}>
                Open WhatsApp
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Send SMS</h3>
              <p className="contact-detail">Quick message</p>
              <button className="contact-btn sms" onClick={handleSMS}>
                Send Message
              </button>
            </div>
          </div>

          <div className="location-info">
            <h3>Visit Our Shop</h3>
            <p>📍 Pro. Raju Matre - Matro Auto Parts & Auto Garage</p>
            <p>🕐 Open Daily | Expert Two-Wheeler Service</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactModal;