import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/invoice.css"; // Style for the invoice page

const Invoice = () => {
  const location = useLocation();
  const {
    plan,
    price,
    features,
    name,
    email,
    paymentMethod,
    transactionId,
    date,
  } = location.state || {};

  return (
    <div className="invoice-page">
      <div className="invoice-header">
        <h1>Invoice</h1>
        <p>Invoice Number: #{transactionId}</p>
        <p>Date of Issue: {date}</p>
      </div>

      <div className="company-info">
        <h3>Company Information</h3>
        <p>
          <strong>Company Name:</strong> UI/UX Design Co.
        </p>
        <p>
          <strong>Email:</strong> samuelanidi25@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +234 704 792 0318
        </p>
      </div>

      <div className="user-info">
        <h3>Customer Information</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
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

      <div className="payment-info">
        <h3>Payment Information</h3>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
        <p>
          <strong>Transaction ID:</strong> {transactionId}
        </p>
      </div>

      <div className="footer">
        <p>
          Thank you for your purchase! If you have any questions, feel free to
          contact us.
        </p>
        <p>For any inquiries, email us at samuelanidi25@gmail.com</p>
      </div>
    </div>
  );
};

export default Invoice;
