import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">UI/UX Designer</div>
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <Link to="/">Home</Link> {/* Home link */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* About link */}
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#content">Content</a>
        </li>
      </ul>
      <button className="join-btn">Join Now</button>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
