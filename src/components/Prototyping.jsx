import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/css/prototyping.css";
import artImage from "../assets/image/art-history.svg";
import wiseImage from "../assets/image/wise-compact.svg";

const Prototyping = () => {
  return (
    <Container>
      <section className="prototype">
        <Row className="text-center">
          <Col md={6}>
            <div className="prototype-content">
              <h2>Create beautiful layout simply</h2>
              <Button className="work-btn">See all my work</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="content2">
              <h3>
                Let’s deal with the most useful design kits. You're free to
                generate ideas to make them alive faster than before.
              </h3>
            </div>
          </Col>
        </Row>
      </section>

      <section className="workof-art mt-5">
        <Row>
          <Col md={6} className="text-center">
            <img src={artImage} alt="Art" className="img-fluid" />
            <div className="design mt-3">
              <h1>Design</h1>
              <h5>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </h5>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img src={wiseImage} alt="Wise" className="img-fluid" />
            <div className="proto mt-3">
              <h1>Prototyping</h1>
              <h5>
                There are some known issues with variable fonts in Chrome, in
                particular on Microsoft Windows.
              </h5>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Prototyping;
