import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "../assets/css/testimonials.css";
import tes1 from "../assets/image/hero-image.svg";
import tes2 from "../assets/image/hero-image.svg";
import tes3 from "../assets/image/hero-image.svg";
import tes4 from "../assets/image/hero-image.svg";
import tes5 from "../assets/image/hero-image.svg";
import tes6 from "../assets/image/hero-image.svg";
import tes7 from "../assets/image/hero-image.svg";
import tes8 from "../assets/image/hero-image.svg";
import tes9 from "../assets/image/hero-image.svg";
import tes10 from "../assets/image/hero-image.svg";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Inc.",
    quote:
      "The design exceeded our expectations. It was a pleasure to work with such a skilled professional.",
    rating: 5,
    imgSrc: tes1,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager, Tech Solutions",
    quote:
      "Their attention to detail and creativity transformed our app. Highly recommended!",
    rating: 5,
    imgSrc: tes2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Founder, StartUp Co.",
    quote:
      "The project was completed on time and exceeded all expectations. Fantastic work!",
    rating: 5,
    imgSrc: tes3,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "UI Designer, Creative Labs",
    quote:
      "Brilliant designs that truly resonate with our brand identity. Outstanding work!",
    rating: 4,
    imgSrc: tes4,
  },
  {
    id: 5,
    name: "Daniel White",
    role: "CTO, InnovateX",
    quote:
      "The team's ability to understand our requirements and deliver was commendable. Great experience!",
    rating: 5,
    imgSrc: tes5,
  },
  {
    id: 6,
    name: "Laura Brown",
    role: "Marketing Manager, AdWorld",
    quote:
      "We saw a significant improvement in user engagement after the redesign. Thank you!",
    rating: 4,
    imgSrc: tes6,
  },
  {
    id: 7,
    name: "Chris Green",
    role: "Founder, EcoTech",
    quote:
      "A seamless collaboration with remarkable outcomes. Highly recommend their services.",
    rating: 5,
    imgSrc: tes7,
  },
  {
    id: 8,
    name: "Sophia Lee",
    role: "UX Specialist, UXify",
    quote:
      "The UX designs were intuitive and aligned perfectly with our user base.",
    rating: 4,
    imgSrc: tes8,
  },
  {
    id: 9,
    name: "David Harris",
    role: "Creative Director, Visionary Media",
    quote: "The creativity and execution were spot on. Truly exceptional work.",
    rating: 5,
    imgSrc: tes9,
  },
  {
    id: 10,
    name: "Isabella Martinez",
    role: "Product Owner, AgileWorks",
    quote:
      "Their expertise in UX design is unparalleled. Loved working with them.",
    rating: 5,
    imgSrc: tes10,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array(rating).fill("⭐").join("");
  };

  // Divide testimonials into groups of 3 for each carousel slide
  const groupTestimonials = () => {
    const groups = [];
    for (let i = 0; i < testimonialsData.length; i += 3) {
      groups.push(testimonialsData.slice(i, i + 3));
    }
    return groups;
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Carousel>
        {groupTestimonials().map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((testimonial) => (
                <Col md={4} className="mb-3" key={testimonial.id}>
                  <Card className="text-center shadow-sm p-4">
                    <Card.Img
                      variant="top"
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      className="rounded-circle mx-auto mb-3"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <Card.Body>
                      <Card.Text className="fs-5">
                        ❝ {testimonial.quote} ❞
                      </Card.Text>
                      <h5 className="mt-3">{testimonial.name}</h5>
                      <p className="text-muted">{testimonial.role}</p>
                      <p className="text-warning">
                        {renderStars(testimonial.rating)}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
