import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/hero.css";
import heroImage from "../assets/image/hero-image.svg";

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/signup"); // Navigates to the signup page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          UI/UX asset <br />
          for creators <br />
          worldwide
        </h1>
        <p>
          Becoming a member gives you access to education, <br />
          resources, and community to help you grow your career <br />
          and your bank account
        </p>
        <button className="join-button" onClick={handleJoinClick}>
          Join for Free
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
