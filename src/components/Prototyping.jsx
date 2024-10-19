import React from "react";
import "../assets/css/prototyping.css";
import artImage from "../assets/image/art-history.svg";
import wiseImage from "../assets/image/wise-compact.svg";

const Prototyping = () => {
  return (
    <div>
      <section className="prototype">
        <div className="prototype-content">
          <h2>create beautiful layout simply</h2>
          <button className="work-btn">see all my work</button>
        </div>
        <div className="content2">
          <h3>
            Let’s deal with the most useful design <br />
            kits. You're free to generate ideas to make <br />
            them alive faster than before.
          </h3>
        </div>
      </section>
      <div className="workof-art">
        <div className="art-image">
          <img src={artImage} alt="Art" />
          <div className="design">
            <br />
            <h1>Design</h1>
            <h3>
              There are some known issues with <br />
              variable fonts in Chrome, in particular <br />
              on Microsoft Windows.
            </h3>
          </div>
        </div>
        <div className="wise-image">
          <img src={wiseImage} alt="Wise"/>
          <div className="proto">
            <br />
            <h1>Prototyping</h1>
            <h3>
              There are some known issues with <br />
              variable fonts in Chrome, in particular <br />
              on Microsoft Windows.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
