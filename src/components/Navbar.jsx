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
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        <li>
          <a href="#content">Content</a>
        </li>
        {/* Add the "Join Now" button inside the mobile menu */}
        {isMobileMenuOpen && (
          <li className="mobile-join-btn">
            <Link to="/auth">
              <button className="join-btn">Join Now</button>
            </Link>
          </li>
        )}
      </ul>
      {/* Desktop view "Join Now" button */}
      {!isMobileMenuOpen && (
        <Link to="/auth">
          <button className="join-btn">Join Now</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
