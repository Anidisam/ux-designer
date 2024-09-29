import React from "react";
import "../assets/css/hero.css";
import heroImage from "../assets/image/hero-image.svg";

const hero = () => {
  return (
    <div>
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
          <button className="join-btn">Join for Free</button>
        </div>
        <div className="hero-image">
          <img src={heroImage}
           alt="Hero" />
        </div>
      </section>
    </div>
  );
};

export default hero;
