import React from "react";
import "../assets/css/freeaccess.css";

const FreeAccess = () => {
  return (
    <div className="freeaccess-container">
      <h1>Welcome to Free Access</h1>
      <p>Explore the resources below to start your UI/UX journey:</p>
      
      <div className="resources">
        {/* Free UI/UX Tutorials */}
        <div className="resource-box">
          <h2>Free UI/UX Tutorials</h2>
          <p>Learn the basics of UI/UX design through step-by-step tutorials.</p>
          <a
            href="https://www.youtube.com/results?search_query=free+ui+ux+tutorials"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            Explore Tutorials
          </a>
        </div>

        {/* Basic Design Tools */}
        <div className="resource-box">
          <h2>Basic Design Tools</h2>
          <p>Discover essential tools to kickstart your design projects.</p>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            Explore Tools
          </a>
        </div>

        {/* Beginner Guides */}
        <div className="resource-box">
          <h2>Beginner Guides</h2>
          <p>Access comprehensive guides to build a strong foundation in design.</p>
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            Explore Guides
          </a>
        </div>
      </div>
      
      {/* Upgrade to Premium Button */}
      <div className="upgrade-container">
        <p>Want more features and exclusive resources?</p>
        <button 
          className="upgrade-button"
          onClick={() => window.location.href = "/pricing"}
        >
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};

export default FreeAccess;
