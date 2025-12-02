import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🏍️ Matro Auto Parts</h3>
          <p className="footer-tagline">जय श्री दादाजी</p>
          <p>Your trusted partner for all two-wheeler needs</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Complete Servicing</li>
            <li>Engine Repair</li>
            <li>Genuine Parts</li>
            <li>Paint & Body Work</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 8959898809</p>
          <p>🕐 Open Daily</p>
          <p>🏍️ All Two-Wheeler Services</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Matro Auto Parts & Auto Garage. All rights reserved.</p>
        <p>Pro. Raju Matre | Professional Two-Wheeler Care</p>
      </div>
    </footer>
  );
}

export default Footer;