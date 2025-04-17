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

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Our Platform?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎥</div>
                        <h3>High Quality Streaming</h3>
                        <p>Enjoy crystal clear video quality with our advanced streaming technology.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Cross-Platform</h3>
                        <p>Watch your favorite content on any device, anywhere, anytime.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure & Private</h3>
                        <p>Your content is protected with industry-leading security measures.</p>
                    </div>
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
