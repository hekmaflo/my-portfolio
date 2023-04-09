import React from "react";
import cross from "./assets/cross.png";
import mini from "./assets/mini.png";

const Projects = () => {
  return (
    <div className="More">
      <div className="info-container">
        <div className="info-nav">
          <div className="info-nav-items">
            <img className="logo-project" src={cross} alt="cross" />
            <img className="logo-project" src={mini} alt="cross" />

            <p className="project-nav-title">project-one.html</p>
          </div>
        </div>
        <div className="info-container-img">
          <h1>Image</h1>
        </div>
        <h2>hello</h2>
        <p>This is a description for the project</p>
        <button className="button">View Project</button>
        <button className="button">Repo</button>
      </div>
      <div className="info-container">
        <div className="info-nav">
          <p>project</p>
        </div>
        <h1>hello</h1>
      </div>
      <div className="info-container">
        <div className="info-nav">
          <p>project</p>
        </div>
        <h1>hello</h1>
      </div>
      <div className="info-container">
        <div className="info-nav">
          <p>project</p>
        </div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Projects;
