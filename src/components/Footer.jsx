import React from 'react'
import "../assets/css/footer.css";
// import lineImage from "../assets/image/line1.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer navbar navbar-expand-lg navbar-light">
        <div className="container">

          <a className="navbar-brand" href="#">
            UI/UX Designer
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Know About Us
              </a>
            </li>
          </ul>

          <div className="social-icons">
            <a href="https://twitter.com" className="me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="me-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" className="me-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>
            © Copyright All Rights Reserved |<a href="#"> Privacy Policy </a> |
            <a href="#"> Terms and Conditions </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer
