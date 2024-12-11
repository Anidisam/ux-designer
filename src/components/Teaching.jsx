import React from "react";
import "../assets/css/teaching.css";
import sideImage from "../assets/image/side-image.svg";

const Teaching = () => {
  return (
    <div>
      <section className="start">
        <div className="development">
          <h1>
            <b>
              Start learning <br />
              app development
            </b>
          </h1>
          <h3>
            There are some known issues with <br />
            variable fonts in Chrome, in particular <br />
            on Microsoft Windows.
          </h3>
          <a href="https://www.codecademy.com/learn"
          target="_blank"
          rel="noopener noreferrer">
            <h2>See More</h2>
          </a>
        </div>
        <div className="side-image">
          <img src={sideImage} alt="Beta illustration" />
        </div>
      </section>
    </div>
  );
};

export default Teaching;
