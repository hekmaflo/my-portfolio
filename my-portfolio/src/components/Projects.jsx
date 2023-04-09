import React from "react";
import cross from "./assets/cross.png";
import mini from "./assets/mini.png";

const Projects = () => {
  const projects = [
    {
      projectnav: "project-ocho.html",
      image: "https://i.imgur.com/0TP4sEi.gif",
      projectname: "Ocho",
      description: "short description here for the project",
      projectlink: "https://www.google.com",
      githubrepo: "https://www.github.com",
    },

    {
      projectnav: "project-panko.html",
      image: "https://i.imgur.com/lCAwshN.gif",
      projectname: "PANKO",
      description: "short description here for the project three",
      projectlink: "https://www.google.com",
      githubrepo: "https://www.github.com",
    },

    {
      projectnav: "project-whac.html",
      image: "https://i.imgur.com/y0ZqiwE.gif",
      projectname: "Whac-a-Mole Game",
      description: "short description here for the project two",
      projectlink: "https://www.google.com",
      githubrepo: "https://www.github.com",
    },

    {
      projectnav: "project-four.html",
      image: "image-here-four",
      projectname: "project name four",
      description: "short description here for the project four",
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
          <div
            className="info-container-img"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            {/* <h1>{project.projecname}</h1> */}
          </div>
          <h2>{project.projectname}</h2>
          <p>{project.description}</p>
          <a href={project.projectlink}>
            <button className="button">View Project</button>
          </a>
          <a href={project.githubrepo}>
            <button className="button">Repo</button>
          </a>
        </div>
      ))}
      {/* <div className="info-container">
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
      </div> */}
    </div>
  );
};

export default Projects;
