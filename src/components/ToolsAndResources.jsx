import React from "react";
import "../assets/css/toolsAndResources.css";

const ToolsAndResources = () => {
  const resources = [
    {
      category: "Tools for UI/UX Design",
      items: [
        { name: "Figma", link: "https://www.figma.com" },
        { name: "Sketch", link: "https://www.sketch.com" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html" },
        { name: "InVision", link: "https://www.invisionapp.com" },
      ],
    },
    {
      category: "Free Design Resources",
      items: [
        { name: "Font Awesome", link: "https://fontawesome.com" },
        { name: "Material Icons", link: "https://fonts.google.com/icons" },
        { name: "Flaticon", link: "https://www.flaticon.com" },
        { name: "UnDraw", link: "https://undraw.co" },
        { name: "Freepik", link: "https://www.freepik.com" },
        { name: "Blush", link: "https://blush.design" },
      ],
    },
    {
      category: "Design Systems and Frameworks",
      items: [
        {
          name: "IBM Carbon Design System",
          link: "https://www.carbondesignsystem.com",
        },
        { name: "Material Design", link: "https://material.io/design" },
        { name: "Bootstrap", link: "https://getbootstrap.com" },
        { name: "Tailwind CSS", link: "https://tailwindcss.com" },
      ],
    },
    {
      category: "Prototyping Tools",
      items: [
        { name: "ProtoPie", link: "https://www.protopie.io" },
        { name: "Marvel", link: "https://marvelapp.com" },
        { name: "Axure RP", link: "https://www.axure.com" },
        { name: "Balsamiq", link: "https://balsamiq.com" },
      ],
    },
    {
      category: "Downloads",
      items: [
        { name: "UI Kits for Figma", link: "https://www.figma.com/community" },
        {
          name: "Wireframe Templates",
          link: "https://www.sketchappsources.com",
        },
        {
          name: "Prototyping Kits",
          link: "https://www.adobe.com/products/xd/features/prototyping.html",
        },
      ],
    },
    {
      category: "Design Communities",
      items: [
        {
          name: "LinkedIn Design Groups",
          link: "https://www.linkedin.com/groups",
        },
        {
          name: "Reddit UX Design",
          link: "https://www.reddit.com/r/UXDesign/",
        },
        { name: "Behance", link: "https://www.behance.net" },
        { name: "Dribbble", link: "https://dribbble.com" },
      ],
    },
  ];

  return (
    <div className="tools-and-resources">
      {resources.map((resource, index) => (
        <div className="resource-container" key={index}>
          <h3>{resource.category}</h3>
          <div className="resource-items">
            {resource.items.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="resource-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsAndResources;
