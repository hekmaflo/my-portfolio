import React from "react";
import css from "./assets/css.png";
import git from "./assets/git.png";
import insomnia from "./assets/insomnia.png";
import javascript from "./assets/javascript.png";
import mongo from "./assets/mongodb.png";
// import mongoose from "./assets/mongoose.png";
import nodejs from "./assets/nodejs.png";
import react from "./assets/reactjs.png";
import sql from "./assets/postfresql.png";
import vscode from "./assets/vscode.png";
import vue from "./assets/vuejs.png";
import python from "./assets/python.png";
import flask from "./assets/flask.png";
import heroku from "./assets/heroku.png";
import cross from "./assets/cross.png";
import mini from "./assets/mini.png";

const Skills = () => {
  return (
    <div className="More">
      <div className="skills-info-container">
        <div className="skills-info-nav">
          <div className="info-nav-items">
            <img className="logos-skills" src={cross} alt="cross" />
            <img className="logos-skills" src={mini} alt="cross" />

            <p className="project-nav-title">i-have-a-set-of-skills.html</p>
          </div>
        </div>
        {/* <div className="skills-info-container-img">
          <h1>Image</h1>
        </div> */}
        <h3 className="google-font">
          The secret sauce that makes my projects happend.
        </h3>
        <div className="all-skills">
          <div className="skills-category">
            <h3>Front End</h3>
            <img className="skill-logo" src={javascript} alt="logo" />
            <img className="skill-logo" src={python} alt="logo" />
            <img className="skill-logo" src={react} alt="logo" />
            <img className="skill-logo" src={vue} alt="logo" />
            <img className="skill-logo" src={css} alt="logo" />
          </div>
          <div className="skills-category">
            <h3>Back End</h3>
            <img className="skill-logo" src={nodejs} alt="logo" />
            <img className="skill-logo" src={mongo} alt="logo" />
            {/* <img className="skill-logo" src={mongoose} alt="logo" /> */}
            <img className="skill-logo" src={sql} alt="logo" />
            <img className="skill-logo" src={flask} alt="logo" />
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            <img className="skill-logo" src={git} alt="logo" />
            <img className="skill-logo" src={heroku} alt="logo" />
            <img className="skill-logo" src={vscode} alt="logo" />
            <img className="skill-logo" src={insomnia} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
