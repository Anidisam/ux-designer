import React from "react";
import "../assets/css/about.css";
import avater from "../assets/image/girl1.svg";
import avater2 from "../assets/image/girl2.svg";
import avater3 from "../assets/image/girl3.svg";
import avater4 from "../assets/image/hero-image.svg";

const About = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <br />
          <div className="about-content">
            <div className="about-item">
              <h3>Who We Are</h3>
              <p>
                We are a creative team of UI/UX designers passionate about
                delivering intuitive and user-centric digital experiences. Our
                diverse backgrounds in design, technology, and psychology
                empower us to understand user needs and create tailored
                solutions. We believe in collaboration and strive to foster an
                environment where creativity flourishes, ensuring that our
                designs resonate with users.
              </p>
            </div>
            <div className="about-item">
              <h3>What We Do</h3>
              <p>
                Our mission is to empower businesses by designing seamless,
                engaging interfaces that enhance user satisfaction. We
                specialize in user research, wireframing, prototyping, and
                usability testing to create designs that are not only visually
                appealing but also functional and accessible. Our goal is to
                bridge the gap between users and technology, ensuring a smooth
                and enjoyable experience across all platforms.
              </p>
            </div>
            <div className="about-item">
              <h3>Our Mission</h3>
              <p>
                We believe in simplicity, user empowerment, and continuous
                innovation to create designs that speak for themselves. Our
                mission is to advocate for the user, ensuring that their voice
                is heard throughout the design process. By prioritizing
                usability and aesthetic appeal, we aim to inspire confidence and
                satisfaction in every interaction users have with our designs,
                ultimately driving business success.
              </p>
            </div>
          </div>
        </div>
      </section>
        
      <section id="our-roles" className="our-roles">
        <div className="container">
          <h2>Our Roles</h2>
          <div className="roles-content">
            <div className="role-item">
              <img
                src={avater}
                alt="Jane Doe"
                className="avatar"
              />
              <h3>UI Designer</h3>
              <p>
                Jane Doe: A skilled UI designer with over 5 years of experience
                in creating intuitive user interfaces. Jane has a passion for
                design that blends functionality with aesthetic appeal, ensuring
                every element serves a purpose while looking great.
              </p>
            </div>
            <div className="role-item">
              <img
                src={avater2}
                alt="John Smith"
                className="avatar"
              />
              <h3>UX Researcher</h3>
              <p>
                John Smith: With a background in psychology, John specializes in
                user research and usability testing. He focuses on understanding
                user behavior and needs to inform design decisions, ensuring
                that the final product resonates with its audience.
              </p>
            </div>
            <div className="role-item">
              <img
                src={avater3}
                alt="Alice Johnson"
                className="avatar"
              />
              <h3>Frontend Developer</h3>
              <p>
                Alice Johnson: An expert in HTML, CSS, and JavaScript, Alice
                bridges the gap between design and development. She collaborates
                closely with designers to bring their visions to life, ensuring
                that the final product is both beautiful and functional.
              </p>
            </div>
            <div className="role-item">
              <img
                src={avater4}
                alt="Bob Brown"
                className="avatar"
              />
              <h3>Product Manager</h3>
              <p>
                Bob Brown: A strategic thinker, Bob leads project timelines and
                ensures team alignment. He coordinates between design and
                development teams, facilitating communication and keeping
                projects on track to meet deadlines and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Our Roles Section */}
    </div>
  );
};

export default About;
