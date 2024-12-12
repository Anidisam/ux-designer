import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate hook
  const { plan, price, features, name, email, paymentMethod, transactionId } =
    location.state || {};

  return (
    <div className="confirmation-page">
      {/* Success Message */}
      <div className="confirmation-message">
        <h1>Thank You for Your Purchase!</h1>
        <p>
          Your payment has been successfully processed. We're excited to have
          you onboard!
        </p>
        <div className="success-icon">
          {/* A checkmark or other success icon */}
          <span role="img" aria-label="checkmark">
            ✅
          </span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>
          <strong>Plan:</strong> {plan}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <ul>
          {features &&
            features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>

      {/* Payment Details */}
      <div className="payment-details">
        <h2>Payment Information</h2>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
        <p>
          <strong>Transaction ID:</strong> {transactionId}
        </p>
      </div>

      {/* User Information */}
      <div className="user-info">
        <h2>User Information</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      {/* Next Steps */}
      <div className="next-steps">
        <button className="cta-button" onClick={() => navigate("/")}>
          Go Back Home
        </button>
        <button
          className="cta-button"
          onClick={() =>
            navigate("/invoice", {
              state: {
                plan,
                price,
                features,
                name,
                email,
                paymentMethod,
                transactionId,
                date: new Date().toLocaleDateString(),
              },
            })
          }
        >
          View Invoice
        </button>
      </div>

      {/* Support */}
      <div className="support-info">
        <p>
          If you have any questions, feel free to{" "}
          <a href="mailto:samuelanidi25@gmail.com?subject=Support Inquiry&body=Please describe your issue here.">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
