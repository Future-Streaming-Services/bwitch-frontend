import React, { useState } from 'react';
import './AuthPage.css';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }
    console.log('Signing in with:', email, password);
  };

  return (
    <div className="auth-page">
      <div className="form-section sign-in-form">
        <Link to="/" className="auth-logo-link">
          <img src="/src/assets/icon/icon-long.png" alt="Logo" className="auth-logo" />
        </Link>
        <h2 className="title-text">Glad to see you back!</h2>
        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="yourSaas@superhit.com" 
          />
        </div>
        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="nucle@rC0de" 
          />
        </div>
        <button className="primary-button" onClick={handleSignIn}>Sign In</button>
        <div className="separator">OR</div>
        <button className="google-button" onClick={() => { /* Handle Google Sign Up */ }}>
          <FaGoogle className="google-icon" /> Sign In with Google
        </button>
        <p className="redirect-text">
          Don't have an account? <span className="redirect-link" onClick={() => navigate('/sign-up')}>Sign Up</span>
        </p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="auth-video">
          <source src="/auth-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SignInPage;