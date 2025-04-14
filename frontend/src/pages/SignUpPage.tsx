import React, { useState, useEffect } from 'react';
import './AuthPage.css'; // We'll use the same CSS for both pages
import { FaGoogle } from 'react-icons/fa'; // For Google Icon
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [fullNameHint, setFullNameHint] = useState('Aditya Roy');
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFullNameHint((prevHint) => (prevHint === 'Aditya Roy' ? 'Saurabh Dhingra' : 'Aditya Roy'));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleSignUp = () => {
    // Implement your email and password validation here
    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[^a-zA-Z0-9\s]/.test(password)) {
      alert('Password must be at least 8 characters long and contain one uppercase letter, one digit, and one special character.');
      return;
    }
    if (password !== repeatPassword) {
      alert('Passwords do not match.');
      return;
    }
    // If validation passes, navigate to verification link sent page
    navigate('/verification-sent');
  };

  return (
    <div className="auth-page">
      <div className="form-section sign-up-form">
        <h2 className="title-text">You won't need to manage video assets after today</h2>
        <div className="text-field">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={fullNameHint} />
        </div>
        <div className="text-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nextBillionDollarSaas@unicorn.com" />
        </div>
        <div className="text-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Not your cat's name" />
        </div>
        <div className="text-field">
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input type="password" id="repeatPassword" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Top Secret" />
        </div>
        <button className="primary-button" onClick={handleSignUp}>Sign Up</button>
        <div className="separator">OR</div>
        <button className="google-button" onClick={() => { /* Handle Google Sign Up */ }}>
          <FaGoogle className="google-icon" /> Sign - Up with Google
        </button>
        <p className="redirect-text">
          Already have an account? <span className="redirect-link" onClick={() => navigate('/sign-in')}>Sign In</span>
        </p>
      </div>
      <div className="image-section">
        {/* Placeholder for the image */}
      </div>
    </div>
  );
};

export default SignUpPage;