import React from 'react';
import './FeaturesBanner.css';

function FeaturesBanner() {
  return (
    <section className="features-banner">
      <div className="banner-container">
        <h2>Why Choose Matro Auto Parts?</h2>
        <div className="banner-features">
          <div className="banner-item">
            <span className="banner-icon">✅</span>
            <div>
              <h3>Expert Service</h3>
              <p>All two-wheeler repairs done professionally</p>
            </div>
          </div>
          <div className="banner-item">
            <span className="banner-icon">🏍️</span>
            <div>
              <h3>Genuine Parts</h3>
              <p>Complete seat cover range & tube tyre available</p>
            </div>
          </div>
          <div className="banner-item">
            <span className="banner-icon">⚡</span>
            <div>
              <h3>Fast Service</h3>
              <p>Quick turnaround time for all repairs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBanner;