import React from "react";
import me1 from "./assets/me1.png";
import { Link } from "react-router-dom";

const CompleteAbout = () => {
  return (
    <div className="complete-about">
      <div className="about-card">
        <img className="profile-pic-about" src={me1} alt="mypic" />

        <div className="right-about-card">
          <h1 className="about-me-name">HECTOR FLORES</h1>
          <h2 className="google-font">Software Engineer</h2>
          {/* <h4>git add, git commit, git push is the new eat, pray & love</h4> */}
          <h2 className="google-font">I am just a guy who enjoys to code.</h2>
          <p className="right-description">
            Hi there, I'm Hector - the software engineer you've been searching
            for. I'm a fan of all things old school and retro. Black and white
            film? Yes please. Film photography? Absolutely. 8-bit art? Bring it
            on. And don't even get me started on cyber punk literature. When it
            comes to coding, I'm in my element. I love the challenge of creating
            something out of nothing, and I'm not satisfied until it's perfect.
            So if you're looking for a software engineer with a passion for both
            art and code, look no further.
          </p>
          <Link to="/">
            <button className="button">*HOME*</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompleteAbout;
