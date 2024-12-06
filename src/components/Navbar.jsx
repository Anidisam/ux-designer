import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <a href="#content" onClick={toggleDropdown}>
            Content {isDropdownOpen ? "▲" : "▼"}
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                {/* Link to your portfolio project */}
                <a
                  href="https://my-portfolio-as.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/resources">Tools & Resources</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
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
