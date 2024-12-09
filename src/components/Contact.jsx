import React, { useState, useEffect } from "react";
import "../assets/css/contact.css";

const Contact = () => {
  const [headerText, setHeaderText] = useState("");
  const [subText, setSubText] = useState("");
  const [footerText, setFooterText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Typing effect function
  const typeEffect = (text, setter, delay = 100) => {
    let index = 0;
    const interval = setInterval(() => {
      setter((prev) => text.slice(0, index + 1)); // Slice ensures no duplication
      index++;
      if (index === text.length) {
        clearInterval(interval); // Stop typing when done
      }
    }, delay);
  };

  useEffect(() => {
    // Typing animation for header
    setHeaderText(""); // Reset before typing
    setSubText(""); // Reset before typing
    setFooterText(""); // Reset before typing

    typeEffect("Get in Touch", setHeaderText, 150);
    setTimeout(() => {
      typeEffect("Let’s Create Something Amazing Together!", setSubText, 100);
    }, 2000);

    // Show form and contact info after animations
    setTimeout(() => {
      setIsFormVisible(true);
    }, 4000);

    // Typing animation for footer
    setTimeout(() => {
      typeEffect(
        "I look forward to collaborating with you. Let’s create impactful designs together.",
        setFooterText,
        100
      );
    }, 7000);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 5000);
  };

  return (
    <section className="contact-section">
      <h2>{headerText}</h2>
      <p>{subText}</p>

      {isFormVisible && (
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:samuelanidi25@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                samuelanidi25@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+2347047920318" target="_blank" rel="noreferrer">
                +234 70 4792 0318
              </a>
            </p>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">
                {loading ? <span className="spinner"></span> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

      <p className="footer-text">{footerText}</p>
    </section>
  );
};

export default Contact;
