import React from "react";
import "../assets/css/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2>Our Pricing Plans</h2>
        <p>
          Choose a plan that fits your needs and budget. We offer transparent
          pricing with no hidden costs.
        </p>
        <div className="pricing-plans">
          {/* Basic Plan */}
          <div className="plan">
            <h3>Basic</h3>
            <p className="price">$49/month</p>
            <ul>
              <li>3 Revisions</li>
              <li>Wireframes Only</li>
              <li>Email Support</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
          {/* Standard Plan */}
          <div className="plan">
            <h3>Standard</h3>
            <p className="price">$99/month</p>
            <ul>
              <li>5 Revisions</li>
              <li>Wireframes + Prototypes</li>
              <li>Priority Email Support</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
          {/* Premium Plan */}
          <div className="plan">
            <h3>Premium</h3>
            <p className="price">$199/month</p>
            <ul>
              <li>Unlimited Revisions</li>
              <li>Complete UI/UX Design</li>
              <li>24/7 Support</li>
            </ul>
            <button className="btn">Choose Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
