import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'Complete Servicing',
      description: 'Full bike servicing with expert technicians',
      color: '#3b82f6',
     },
    {
      icon: '⚙️',
      title: 'Engine Repair',
      description: 'Professional engine diagnostics and repair',
      color: '#10b981'
    },
    {
      icon: '🛞',
      title: 'Tire Services',
      description: 'Tire replacement, alignment & balancing',
      color: '#f59e0b'
    },
   
    
    {
      icon: '🛡️',
      title: 'Genuine Parts',
      description: 'Original spare parts for all two-wheelers',
      color: '#06b6d4'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional two-wheeler care with expert technicians
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{'--accent-color': service.color}}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;