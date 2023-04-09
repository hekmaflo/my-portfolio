import React from "react";
import github from "./assets/github.png";
import mail from "./assets/mail.png";
import linkdin from "./assets/linkdin.png";
import placeholder from "./assets/placeholder.png";
import me from "./assets/me.png";
import me1 from "./assets/me1.png";
const AboutMe = () => {
  return (
    <div className="About-me-container">
      <div className="contain">
        <h1 className="about-me-text">Hello, I'm Hector.</h1>
        <h2 className="about-me-text-sub">Software Engineer</h2>
        <h4>Choosing to turn coffee into lines of code.</h4>
        <div>
          <img className="logo" src={github} alt="logo" />
          <img className="logo" src={linkdin} alt="logo" />
          <img className="logo" src={mail} alt="logo" />
        </div>
        <div>
          <button className="button">ABOUT ME</button>
          <button className="button">RESUME</button>
        </div>
      </div>
      <div className="contain">
        <img className="profile-pic" src={me1} alt="mypic" />
        <p>You miss 100% of the opportinites you never take</p>
      </div>
    </div>
  );
};

export default AboutMe;
