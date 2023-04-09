import React from "react";
import cross from "./assets/cross.png";
import mini from "./assets/mini.png";

const Projects = () => {
  const projects = [
    {
      projectnav: "project-one.html",
      image: "image-here",
      projecname: "project name",
      description: "short description here for the project",
      projectlink: "www.google.com",
      githubrepo: "www.github.com",
    },

    {
      projectnav: "project-two.html",
      image: "image-here-two",
      projecname: "project name two",
      description: "short description here for the project two",
      projectlink: "https://www.google.com",
      githubrepo: "https://www.github.com",
    },
  ];
  return (
    <div className="More">
      {projects.map((project) => (
        <div className="info-container" key={project.projectnav}>
          <div className="info-nav">
            <div className="info-nav-items">
              <img className="logo-project" src={cross} alt="cross" />
              <img className="logo-project" src={mini} alt="cross" />

              <p className="project-nav-title">{project.projectnav}</p>
            </div>
          </div>
          <div className="info-container-img">
            <h1>{project.image}</h1>
          </div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.projectlink}>
            <button className="button">View Project</button>
          </a>
          <a href={project.githubrepo}>
            <button className="button">Repo</button>
          </a>
        </div>
      ))}
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
