import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import imma1 from "../assets/image/girl1.svg";
import imma2 from "../assets/image/girl2.svg";
import imma3 from "../assets/image/girl3.svg";
import Footer from "./Footer";
import "../assets/css/blog.css"; // For custom styling

const articles = [
  {
    id: 1,
    title: "How to Create Seamless User Experiences",
    author: "Jane Doe",
    date: "Oct 20, 2024",
    excerpt:
      "Learn how to craft seamless user journeys with these best practices...",
    imgSrc: imma1,
    tags: ["UX Design", "Best Practices"],
    link: "/article-detail/1",
  },
  {
    id: 2,
    title: "Design Thinking for Beginners",
    author: "John Smith",
    date: "Oct 15, 2024",
    excerpt:
      "An introduction to design thinking and its application in problem-solving...",
    imgSrc: imma2,
    tags: ["Design Thinking", "UI/UX"],
    link: "/article-detail/2",
  },
  {
    id: 3,
    title: "The Future of Prototyping Tools",
    author: "Alice Johnson",
    date: "Oct 10, 2024",
    excerpt:
      "Explore the latest advancements in prototyping tools and their benefits...",
    imgSrc: imma3,
    tags: ["Prototyping", "Trends"],
    link: "/article-detail/3",
  },
];

const Blog = () => {
  return (
    <>
      <Container className="my-5">
        <div className="text-center mb-4">
          <h2>Latest Articles</h2>
          <p>Stay updated with the latest in UI/UX design</p>
        </div>

        {/* Articles Section */}
        <Row>
          {articles.map((article) => (
            <Col key={article.id} md={4} sm={12} className="mb-4">
              <Card className="blog-card">
                <Card.Img
                  variant="top"
                  src={article.imgSrc}
                  alt={article.title}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    By {article.author} - {article.date}
                  </Card.Subtitle>
                  <Card.Text>{article.excerpt}</Card.Text>
                  <div className="mb-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary me-1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Replace <a> with <Link> */}
                  <Link to={article.link}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Embedded YouTube Videos */}
        <div className="my-5">
          <h3 className="text-center">Watch & Learn</h3>
          <Row>
            <Col md={4} sm={12} className="mb-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/55NvZjUZIO8?si=jKGraaknylrDHhbT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TIZ2u8BcSUA?si=ulP_t04OUHRh827g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/195RY7jCuZg?si=oXRB2uGGFMQ9lZrp"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </div>

        {/* Tweets Section */}
        <div className="tweets-section my-5">
          <h3 className="text-center">What Designers are Saying</h3>
          <div className="tweet">
            <p>
              "Design is not just what it looks like and feels like. Design is
              how it works." - @SteveJobs
            </p>
            <div className="tweet-actions">
              <button>💬 Comment</button>
              <button>❤️ Like</button>
              <button>🔗 Share</button>
            </div>
          </div>
          <div className="tweet">
            <p>
              "Every great design begins with an even better story." -
              @LorindaMamo
            </p>
            <div className="tweet-actions">
              <button>💬 Comment</button>
              <button>❤️ Like</button>
              <button>🔗 Share</button>
            </div>
          </div>
          <div className="tweet">
            <p>"Good design is good business." - @ThomasJWatson</p>
            <div className="tweet-actions">
              <button>💬 Comment</button>
              <button>❤️ Like</button>
              <button>🔗 Share</button>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Blog;
