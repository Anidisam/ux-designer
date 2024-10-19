import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/idea.css";
import book1Image from "../assets/image/book 1.svg";
import book2Image from "../assets/image/book 2.svg";
import odeImage from "../assets/image/ode.svg";
import humanImage from "../assets/image/human.svg";

const Idea = () => {
  return (
    <Container>
      <section className="idea">
        <Row className="mb-5">
          <Col className="text-center">
            <h3>
              <b>Create beautiful layouts simply</b>
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="text-center">
            <img src={book1Image} alt="Book 1" className="img-fluid" />
            <div className="content-image mt-3">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </p>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src={book2Image} alt="Book 2" className="img-fluid" />
            <div className="content-image mt-3">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="text-center">
            <img src={odeImage} alt="Ode" className="img-fluid" />
            <div className="content-image mt-3">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </p>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src={humanImage} alt="Human" className="img-fluid" />
            <div className="content-image mt-3">
              <h2>
                <b>Bring your idea to life</b>
              </h2>
              <p>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Idea;
