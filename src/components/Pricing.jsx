import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../assets/css/pricing.css";
 
const Pricing = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (plan, price, features) => {
    navigate("/checkout", { state: { plan, price, features } });
  };

  return (
    <>
    <div className="pricing-section">
      <h1>Pricing</h1>
      <div className="pricing-plan">
        {/* Basic Plan */}
        <div className="plan">
          <h2>Basic</h2>
          <p className="price">$49/month</p>
          <ul>
            <li>3 Revisions</li>
            <li>Wireframes Only</li>
            <li>Email Support</li>
          </ul>
          <button
            className="choose-plan-button"
            onClick={() =>
              handleChoosePlan("Basic", "$49/month", [
                "3 Revisions",
                "Wireframes Only",
                "Email Support",
              ])
            }
          >
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="plan">
          <h2>Standard</h2>
          <p className="price">$99/month</p>
          <ul>
            <li>5 Revisions</li>
            <li>Wireframes + Prototypes</li>
            <li>Priority Email Support</li>
          </ul>
          <button
            className="choose-plan-button"
            onClick={() =>
              handleChoosePlan("Standard", "$99/month", [
                "5 Revisions",
                "Wireframes + Prototypes",
                "Priority Email Support",
              ])
            }
          >
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="plan">
          <h2>Premium</h2>
          <p className="price">$199/month</p>
          <ul>
            <li>Unlimited Revisions</li>
            <li>Complete UI/UX Design</li>
            <li>24/7 Support</li>
          </ul>
          <button
            className="choose-plan-button"
            onClick={() =>
              handleChoosePlan("Premium", "$199/month", [
                "Unlimited Revisions",
                "Complete UI/UX Design",
                "24/7 Support",
              ])
            }
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
