import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/checkout.css";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, price, features } = location.state || {};

  // States to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handleConfirmPurchase = () => {
    const transactionId = Math.floor(Math.random() * 1000000000); // Just a dummy transaction ID

    // Sending the collected data to the confirmation page
    navigate("/confirmation", {
      state: {
        plan,
        price,
        features,
        name,
        email,
        paymentMethod,
        transactionId,
      },
    });
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
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Card Details:
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
            required
          />
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
