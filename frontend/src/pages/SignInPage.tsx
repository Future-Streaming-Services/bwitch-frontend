import React, { useState } from 'react';
import './AuthPage.css'; // Reuse the same CSS
import { FaGoogle } from 'react-icons/fa'; // For Google Icon
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Implement your credential validation here
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }
    // For now, just log the credentials
    console.log('Signing in with:', email, password);
    // In a real application, you would authenticate with your backend
    // Upon successful login, you would likely navigate to a dashboard or main page
  };

  return (
    <div className="auth-page">
      <div className="form-section sign-in-form">
        <h2 className="title-text">Glad to see you back !</h2>
        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="yourSaas@superhit.com" />
        </div>
        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="nucle@rC0de" />
        </div>
        <button className="primary-button" onClick={handleSignIn}>Sign In</button>
        <div className="separator">OR</div>
        <button className="google-button" onClick={() => { /* Handle Google Sign Up */ }}>
          <FaGoogle className="google-icon" /> Sign - Up with Google
        </button>
        <p className="redirect-text">
          Don't have an account? <span className="redirect-link" onClick={() => navigate('/sign-up')}>Sign Up</span>
        </p>
      </div>
      <div className="image-section">
        {/* Placeholder for the image */}
      </div>
    </div>
  );
};

export default SignInPage;