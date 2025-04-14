// src/pages/VerificationSentPage.tsx
import React from 'react';
import './AuthPage.css'; // Reuse styles from AuthPage
import { useNavigate } from 'react-router-dom';

const VerificationSentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="form-section verification-sent">
        <h2 className="title-text">Verification Link Sent!</h2>
        <p className="info-text">
          We've sent a verification link to your email address.
          Please check your inbox (and spam folder) and click on the link to verify your account.
        </p>
        <button className="primary-button" onClick={() => navigate('/')}>
          Go to Homepage
        </button>
        <p className="redirect-text">
          Didn't receive the email? <span className="redirect-link" onClick={() => { /* Implement resend logic */ alert('Resend logic not implemented yet.'); }}>Resend Verification Link</span>
        </p>
      </div>
      <div className="image-section">
        {/* You can add a relevant image here */}
      </div>
    </div>
  );
};

export default VerificationSentPage;