import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/checkout.css";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, price, features } = location.state || {};

  const handleConfirmPurchase = () => {
    navigate("/confirmation", { state: { plan, price } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <h2>Plan: {plan}</h2>
      <p>Price: {price}</p>
      <ul>
        {features &&
          features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Full Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Email Address" required />
        </label>
        <label>
          Card Details:
          <input type="text" placeholder="Card Number" required />
        </label>
        <button
          type="button"
          onClick={handleConfirmPurchase}
          className="confirm-button"
        >
          Confirm and Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
