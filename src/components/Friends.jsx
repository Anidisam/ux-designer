import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/friends.css";
import smallImage from "../assets/image/small.svg";

const Friends = () => {
  const containers = Array(6).fill(null); // Create an array for 6 containers

  return (
    <section className="custom-section">
      <Container>
        <div className="first-text d-flex justify-content-between align-items-center mb-4">
          <a href="#">
            <h1>We've got Friends</h1>
          </a>
          <button className="text-btn">Join for free</button>
        </div>
        <Row>
          {containers.map((_, index) => (
            <Col
              key={index}
              md={4} // Use 4 columns for medium screens
              sm={6} // Use 6 columns for small screens
              xs={12} // Use full width for extra-small screens
              className={`mb-4 ${index % 3 === 1 ? "move-down" : ""}`} // Apply 'move-down' class for styling
            >
              <div className="card p-3 text-center h-100">
                {/* Render six Font Awesome Star Icons */}
                <div className="mb-3">
                  {Array(6)
                    .fill(null)
                    .map((_, starIndex) => (
                      <i
                        key={starIndex}
                        className="far fa-star fa-2x me-1"
                        style={{ color: "#f39c12" }}
                      ></i>
                    ))}
                </div>

                {/* Lorem Text */}
                <p className="lorem-text">
                  “You made it so simple. My new site is so <br />
                  much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”
                </p>

                {/* Human Image and Name */}
                <div className="d-flex align-items-center mt-3 justify-content-center">
                  <img
                    src={smallImage}
                    alt="Human"
                    className="rounded-circle me-3"
                  />
                  <div className="text-start">
                    <strong>Leslie Alexander</strong>
                    <p>Founder</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Friends;
