import React from 'react';
import './PricingPage.css';
import Navbar from '../components/Navbar';
import { FaCheck } from 'react-icons/fa';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Hobby',
      price: 'Free',
      period: 'forever',
      features: [
        'Up to 10 videos',
        'Basic analytics',
        'Standard video quality',
        'Public sharing',
        'Basic support'
      ],
      buttonText: 'Get Started',
      isPopular: false
    },
    {
      name: 'Individual',
      price: '$5',
      period: 'per month',
      features: [
        'Unlimited videos',
        'Advanced analytics',
        'HD video quality',
        'Private sharing',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      isPopular: true
    },
    {
      name: 'Business',
      price: '$8',
      period: 'per month',
      features: [
        'Everything in Individual',
        '4K video quality',
        'Team collaboration',
        'Advanced security',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that's right for you</p>
        </div>
        
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-tag">Most Popular</div>}
              <div className="plan-header">
                <h2>{plan.name}</h2>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <FaCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`plan-button ${plan.isPopular ? 'popular-button' : ''}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage; 