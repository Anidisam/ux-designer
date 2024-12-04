import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import imma1 from "../assets/image/girl1.svg";
import imma2 from "../assets/image/girl2.svg";
import imma3 from "../assets/image/girl3.svg";

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

const LatestArticles = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2>Latest Articles</h2>
        <p>Stay updated with the latest in UI/UX design</p>
      </div>

      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={4} sm={12} className="mb-4">
            <Card>
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
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Read More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestArticles;
