import React from "react";
import "../assets/css/friends.css";
import smallImage from "../assets/image/small.svg";

const Friends = () => {
  const containers = Array(6).fill(null); // Create an array for 6 containers

  return (
    <section className="custom-section">
        <div className="first-text">
            <a href="#"><h1>We've got Friends</h1></a>
            <button className="text-btn">Join for free</button>
        </div>
    <div className="container mt-5">
      <div className="row">
        {containers.map((_, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4 ${index % 3 === 1 ? "move-down" : ""}`} // Apply 'move-down' class to the middle container
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
                “You made it so simple. My new site is so <br />much faster and easier
                to work with than <br />my old site. I just choose the page, make <br />the
                change & it is a good channel for us.”
              </p>

              {/* Human Image and Name */}
              <div className="d-flex align-items-center mt-3">
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
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Friends;
