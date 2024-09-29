import React from 'react'
import "../assets/css/idea.css";
import book1Image from "../assets/image/book 1.svg";
import book2Image from "../assets/image/book 2.svg";
import odeImage from "../assets/image/ode.svg";
import humanImage from "../assets/image/human.svg";
const Idea = () => {
  return (
    <div>
      <section className="idea">
        <div className="ideas">
          <h3>
            <b>
              Create beautiful layouts <br />
              simply
            </b>
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum <br />
            available, but the majority have suffered alteration in some <br />
            form, by injected humour, or randomised words
          </p>
        </div>

        <div className="icon">
          <div className="image-icon">
            <img src={book1Image} alt="" />
            <div className="content-image">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable <br />
                fonts in Chrome, in particular on Microsoft <br />
                Windows
              </p>
            </div>
          </div>

          <div className="image-icon2">
            <img src={book2Image} alt="" />
            <div className="content-image">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable <br />
                fonts in Chrome, in particular on Microsoft <br />
                Windows
              </p>
            </div>
          </div>
        </div>
        <div className="icon2">
          <div className="image-icon">
            <img src={odeImage} alt="" />
            <div className="content-image">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable <br />
                fonts in Chrome, in particular on Microsoft <br />
                Windows
              </p>
            </div>
          </div>

          <div className="image-icon3">
            <img src={humanImage} alt="" />
            <div className="content-image">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable <br />
                fonts in Chrome, in particular on Microsoft <br />
                Windows
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Idea
