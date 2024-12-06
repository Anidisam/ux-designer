import React from "react";
import "../assets/css/services.css";
import Footer from "./Footer";

const services = [
  {
    id: 1,
    title: "UI Design",
    description: "Crafting stunning, user-friendly interfaces.",
    subcategories: ["Wireframing", "Mockups", "Prototyping"],
  },
  {
    id: 2,
    title: "UX Design",
    description: "Enhancing usability and user satisfaction.",
    subcategories: ["User Research", "Personas", "Testing"],
  },
  {
    id: 3,
    title: "Web Design",
    description: "Creating responsive, modern websites.",
    subcategories: ["Landing Pages", "Portfolio", "E-commerce"],
  },
  {
    id: 4,
    title: "Mobile App Design",
    description: "Designing intuitive mobile experiences.",
    subcategories: ["iOS", "Android", "Cross-Platform"],
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Bringing ideas to life with visuals.",
    subcategories: ["Logos", "Social Media", "Flyers"],
  },
  {
    id: 6,
    title: "User Testing",
    description: "Improving designs through testing.",
    subcategories: ["Heatmaps", "Focus Groups", "A/B Testing"],
  },
  {
    id: 7,
    title: "Accessibility Audits",
    description: "Designing for everyone, inclusively.",
    subcategories: ["WCAG Compliance"],
  },
  {
    id: 8,
    title: "Design Systems",
    description: "Creating consistent design guidelines.",
    subcategories: ["Style Guides", "Components"],
  },
  {
    id: 9,
    title: "Tools Training",
    description: "Training in essential design tools.",
    subcategories: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    id: 10,
    title: "Consulting",
    description: "Providing expert UI/UX advice.",
    subcategories: ["Project Reviews", "Strategy"],
  },
];

const Services = () => {
  return (
    <>
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <h2>{`${service.id}. ${service.title}`}</h2>
            <p>{service.description}</p>
            {service.subcategories && (
              <ul>
                {service.subcategories.map((subcategory, index) => (
                  <li key={index}>{subcategory}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Services;
