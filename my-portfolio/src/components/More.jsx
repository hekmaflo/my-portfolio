import React from "react";
import Projects from "./Projects";

const More = () => {
  return (
    <div className="More-more">
      <div className="navigation-container">
        <h2 className="nav-button">Projects</h2>
        <h2 className="nav-button">Skills</h2>
        <h2 className="nav-button">Contact</h2>
      </div>
      <Projects />
    </div>
  );
};

export default More;
