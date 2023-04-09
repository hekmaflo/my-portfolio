import React from "react";
import cross from "./assets/cross.png";
import mini from "./assets/mini.png";

const Projects = () => {
  const projects = [
    {
      projectnav: "project-ocho.html",
      image: "https://i.imgur.com/0TP4sEi.gif",
      projectname: "Ocho",
      description:
        "Social media website that allows users create lists to showcase their interests. Built using the MERN stack.",
      projectlink: "https://www.google.com",
      githubrepo: "https://github.com/hekmaflo/ocho-app",
    },

    {
      projectnav: "project-panko.html",
      image: "https://i.imgur.com/lCAwshN.gif",
      projectname: "Panko",
      description:
        "Panko is a MERN stack travel planning application that enables users to organize their trips, adding cities, landmarks, and planned activities.",
      projectlink: "https://panko.herokuapp.com",
      githubrepo: "https://github.com/hekmaflo/panko",
    },

    {
      projectnav: "project-whac.html",
      image: "https://i.imgur.com/y0ZqiwE.gif",
      projectname: "Whac-a-Mole",
      description:
        "Arcade game that challenges players to hit as many moles as possible within a time limit, implemented with HTML, CSS, and JavaScript.",
      projectlink: "https://whac-a-mole-8bit.surge.sh",
      githubrepo: "https://github.com/hekmaflo/whac-a-mole",
    },

    {
      projectnav: "project-codeup.html",
      image: "https://i.imgur.com/NatPJoO.gif",
      projectname: "CodeUp",
      description:
        "CodeUp is a web based application that enables software engineers to monitor their skill acquisition and track their educational progress.",
      projectlink: "https://code-up.vercel.app",
      githubrepo: "https://github.com/fuentesdominic/CodeUp",
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
          <h2 className="google-font">{project.projectname}</h2>
          <p className="project-description">{project.description}</p>
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
