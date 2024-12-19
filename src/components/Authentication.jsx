import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/authentication.css";

const Authentication = () => {
  return (
    <div className="auth-container">
      <h1>Welcome to Our Platform</h1>
      <div className="auth-options">
        <Link to="/signin">
          <button className="auth-btn">Sign In</button>
        </Link>
        <Link to="/create-account">
          {/* <button className="auth-btn">Create Account</button> */}
        </Link>
      </div>
    </div>
  );
};

export default Authentication;
