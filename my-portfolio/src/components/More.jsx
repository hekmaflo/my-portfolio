import React, { useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const More = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="More-more">
      <div className="navigation-container">
        <h2
          className={`nav-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </h2>
        <h2
          className={`nav-button ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </h2>
        <h2
          className={`nav-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </h2>
      </div>
      {activeTab === "projects" && <Projects />}
      {activeTab === "skills" && <Skills />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
};

export default More;
