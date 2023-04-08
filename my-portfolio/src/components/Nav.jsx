import React from "react";
import mug from "./assets/mug.png";
const Nav = () => {
  return (
    <div className="Navbar">
      <img className="logo-small" src={mug} alt="mug" />
      <p className="smol-text">*sip sip*</p>
    </div>
  );
};

export default Nav;
