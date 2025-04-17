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

      {/* Video Tools Banner Section */}
      <section className="video-tools-banner">
        <div className="banner-content">
          <h2>Your full suite of video tools</h2>
          <p>Get everything you need to edit, manage, and publish stunning videos that move the needle</p>
          <button className="demo-button">Watch demo</button>
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

      {/* Core Features Section */}
      <section className="core-features-section">
        <h2>Core Features</h2>
        
        {/* Main Feature Card */}
        <div className="main-feature-card">
          <div className="main-card-image">
            <div className="placeholder-image"></div>
          </div>
          <div className="main-card-content">
            <h3>Hosting and Player</h3>
            <p>Host your videos with our HD, ad-free player. Wherever you embed or share them, your custom player design and branding will go with it.</p>
          </div>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="feature-cards-grid">
          <div className="feature-card">
            <div className="feature-card-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="feature-card-content">
              <h3>Video Management</h3>
              <p>Keep your videos organized and secure. Our tools make it easy to manage your video library and keep your content safe.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="feature-card-content">
              <h3>Analytics</h3>
              <p>Our advanced live and on-demand video analytics help you understand viewer behavior and help you make changes for better future performance.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="feature-card-content">
              <h3>Privacy</h3>
              <p>Choose exactly who can watch your video before it's even finished uploading. Share only with specific individuals, put it behind a password, or hide it from everyone but you.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="feature-card-content">
              <h3>Access Management</h3>
              <p>Control access with SSO, domain whitelisting, and embed restrictions, and manage granular user permissions with SCIM.</p>
            </div>
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