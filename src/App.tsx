// App.js or App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPageContent from './components/LandingPageContent'; // Your other landing page content
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import VerificationSentPage from './pages/VerificationSentPage'; 
import PricingPage from './pages/PricingPage';
import Docs from './pages/Docs';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<LandingPageContent />} /> {/* Your main landing page content */}
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/verification-sent" element={<VerificationSentPage />} /> {/* Route for verification page */}
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;