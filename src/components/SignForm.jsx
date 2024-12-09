import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/css/signform.css";

const SignForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation function

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Sign-up successful! Welcome to the community.");
      setLoading(false);
      navigate("/freeaccess"); // Redirect to FreeAccess page
    }, 5000); // Simulate a 5-second loading spinner
  };

  return (
    <div className="signup-container">
      <h1>Join Our Community</h1>
      <p>Access free resources and exclusive content by signing up below.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="url" placeholder="Portfolio URL (Optional)" />
        <label>
          <input type="checkbox" required /> I agree to the{" "}
          <a href="#">Terms and Conditions</a>.
        </label>
        <button type="submit">
          {loading ? <span className="spinner"></span> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignForm;
