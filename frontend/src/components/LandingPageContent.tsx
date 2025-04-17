// src/components/LandingPageContent.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPageContent.css';

const LandingPageContent: React.FC = () => {
  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

  const handleStartFreeClick = () => {
    setShowSignUpDialog(true);
  };

  const brands = [
    'nike', 'american-airlines', 'nvidia', 'whole-foods', 
    'mcdonalds', 'nissan', 'bloomberg', 'wpp', 'cocacola'
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-video-container">
            <img 
              src="/placeholder-laptop.jpg" 
              alt="Platform Preview" 
              className="hero-video"
            />
            <div className="hero-content">
              <h1>Transform Your Video Content with Ease</h1>
              <p className="subtitle">Professional video editing and hosting platform for creators</p>
              <button 
                className="start-free-button"
                onClick={handleStartFreeClick}
              >
                Start for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2>To be trusted by the following brands and more soon</h2>
        <div className="brands-carousel">
          <div className="brands-track">
            {brands.map((brand, index) => (
              <div key={index} className="brand-logo">
                <img 
                  src={`/brands/${brand}.png`} 
                  alt={`${brand} logo`}
                />
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {brands.map((brand, index) => (
              <div key={`duplicate-${index}`} className="brand-logo">
                <img 
                  src={`/brands/${brand}.png`} 
                  alt={`${brand} logo`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Dialog */}
      {showSignUpDialog && (
        <div className="signup-dialog-overlay">
          <div className="signup-dialog">
            <h3>Create Your Account</h3>
            <p>Start your journey with us today</p>
            <div className="dialog-buttons">
              <button className="close-button" onClick={() => setShowSignUpDialog(false)}>
                Close
              </button>
              <Link to="/signup" className="signup-button">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageContent;