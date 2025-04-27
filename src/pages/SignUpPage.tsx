import React, { useState } from 'react';
import './AuthPage.css';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Signing up with:', email, password);
  };

  return (
    <div className="auth-page">
      <div className="form-section sign-up-form">
        <Link to="/" className="auth-logo-link">
          <img src="/src/assets/icon/icon-long.png" alt="Logo" className="auth-logo" />
        </Link>
        <h2 className="title-text">Create Your Account</h2>
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
        <div className="text-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="nucle@rC0de" 
          />
        </div>
        <button className="primary-button" onClick={handleSignUp}>Sign Up</button>
        <div className="separator">OR</div>
        <button className="google-button" onClick={() => { /* Handle Google Sign Up */ }}>
          <FaGoogle className="google-icon" /> Sign Up with Google
        </button>
        <p className="redirect-text">
          Already have an account? <span className="redirect-link" onClick={() => navigate('/sign-in')}>Sign In</span>
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

export default SignUpPage;