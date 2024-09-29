import React from 'react'
import "../assets/css/teaching.css";
import sideImage from "../assets/image/side-image.svg";
const Teaching = () => {
  return (
    <div>
      <section className="start">
        <div className="development">
          <h1>
            <b>Start teaching <br />
            app development</b>
          </h1>
          <br />
          <h3>
            There are some know issue with <br />
            variable fonts in chrome, in perticular <br />
            on microsoft window
          </h3>
          <br />
          <a href="#">
            <h2>See More</h2>
          </a>
        </div>
        <div className="side-image">
          <img src={sideImage} alt="beta image" />
        </div>
      </section>
    </div>
  );
}

export default Teaching
