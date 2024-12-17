import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button from React Bootstrap
import "../assets/css/signform.css";

const SignForm = () => {
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false); // State for showing the modal
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Sign-up successful! Welcome to the community.");
      setLoading(false);
      navigate("/freeaccess");
    }, 5000);
  };

  // Handlers for the Terms and Conditions modal
  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);

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
          <a href="#" onClick={handleShowTerms}>
            Terms and Conditions
          </a>.
        </label>
        <button type="submit">
          {loading ? <span className="spinner"></span> : "Sign Up"}
        </button>
      </form>

      {/* Terms and Conditions Modal */}
      <Modal show={showTerms} onHide={handleCloseTerms}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Welcome to Join for Free!</h5>
          <p>
            By signing up, you agree to abide by our Terms and Conditions. These include:
          </p>
          <ul>
            <li>Providing accurate and up-to-date information.</li>
            <li>Respecting the community guidelines and other members.</li>
            <li>Not engaging in fraudulent or unethical behavior.</li>
          </ul>
          <p>
            For further details, please reach out to support or refer to our website policies.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTerms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignForm;
