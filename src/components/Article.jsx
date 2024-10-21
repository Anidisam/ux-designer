import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/article.css";
import girl1 from "../assets/image/girl1.svg";
import girl2 from "../assets/image/girl2.svg";
import girl3 from "../assets/image/girl3.svg";

const Article = () => {
  return (
    <section className="latest">
      <Container>
        <div className="article text-center mb-5">
          <a href="#">
            <h2>Latest Article</h2>
          </a>
        </div>

        <Row className="overall-container">
          <Col lg={3} sm={12} xs={12} className="mb-4">
            <div className="imge text-center">
              <img src={girl1} alt="" className="img-fluid" />
              <div className="imge-content">
                <i>
                  <h6>April 02 2022</h6>
                </i>
                <h2>
                  Build an Athletic Body <br />
                  With In Eight Weeks Time
                </h2>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={12} xs={12} className="mb-4">
            <div className="imge2 text-center">
              <img src={girl2} alt="" className="img-fluid" />
              <div className="imge-content">
                <i>
                  <h6>April 02 2022</h6>
                </i>
                <h2>
                  Build an Athletic Body <br />
                  With In Eight Weeks Time
                </h2>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={12} xs={12} className="mb-4">
            <div className="imge3 text-center">
              <img src={girl3} alt="" className="img-fluid" />
              <div className="imge-content">
                <i>
                  <h6>April 02 2022</h6>
                </i>
                <h2>
                  Build an Athletic Body <br />
                  With In Eight Weeks Time
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Article;
