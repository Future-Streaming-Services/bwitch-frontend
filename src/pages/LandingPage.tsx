import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Premium Video Streaming Platform</h1>
                    <p>Stream high-quality videos, create playlists, and share your content with the world.</p>
                    <div className="cta-buttons">
                        <Link to="/signup" className="primary-button">Get Started</Link>
                        <Link to="/login" className="secondary-button">Sign In</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/hero-image.jpg" alt="Streaming Platform Preview" />
                </div>
            </section>

           

            

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Start Streaming?</h2>
                <p>Join thousands of creators and viewers on our platform.</p>
                <Link to="/signup" className="primary-button">Create Your Account</Link>
            </section>
        </div>
    );
};

export default LandingPage;
