import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">UI/UX Designer</div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
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
    </nav>
  );
};

export default Navbar;
