import React from "react";
import github from "./assets/github.png";
import mail from "./assets/mail.png";
import linkdin from "./assets/linkdin.png";
import placeholder from "./assets/placeholder.png";
import me from "./assets/me.png";
import me1 from "./assets/me1.png";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div className="About-me-container">
      <div className="contain">
        <h1 className="about-me-text">Hello, I'm Hector.</h1>
        <h2 className="about-me-text-sub">Software Engineer</h2>
        <h4>Choosing to turn coffee into lines of code.</h4>
        <div>
          <a href="https://github.com/hekmaflo">
            <img className="logo" src={github} alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/hector-floresm/">
            <img className="logo" src={linkdin} alt="logo" />
          </a>
          {/* <img className="logo" src={mail} alt="logo" /> */}
        </div>
        <div>
          <Link to="/about">
            <button className="button">ABOUT ME</button>
          </Link>
          <a href="https://drive.google.com/file/d/1rioLdWE0mQBkh2XWm8D9hmMeht-yBwAM/view?usp=sharing">
            <button className="button">RESUME</button>
          </a>
        </div>
      </div>
      <div className="contain">
        <img className="profile-pic" src={me1} alt="mypic" />
        <p>git add, git commit, git pull is the new eat, pray & love</p>
      </div>
    </div>
  );
};

export default AboutMe;
