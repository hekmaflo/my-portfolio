import React from "react";
import github from "./assets/github.png";
import mail from "./assets/mail.png";
import linkdin from "./assets/linkdin.png";
import placeholder from "./assets/placeholder.png";
const AboutMe = () => {
  return (
    <div className="About-me-container">
      <div className="contain">
        <h1>Hello, I'm Hector Flores</h1>
        <h2>Software Engineer</h2>
        <h3>Turning coffee into lines of code.</h3>
        <img className="logo" src={github} alt="logo" />
        <img className="logo" src={linkdin} alt="logo" />
        <img className="logo" src={mail} alt="logo" />
        <div>
          <button className="button">ABOUT ME</button>
          <button className="button">RESUME</button>
        </div>
      </div>
      <div className="contain">
        <img className="profile-pic" src={placeholder} alt="mypic" />
      </div>
    </div>
  );
};

export default AboutMe;
