import React from "react";
import phone from "./assets/phone.png";
import email from "./assets/email.png";
import social from "./assets/social.png";
const Contact = () => {
  return (
    <div className="More">
      <div className="all-info">
        <div className="contact-info">
          <div className="contact-logo-box">
            <img className="contact-logo" src={phone} alt="" />
          </div>
          <div>
            <h4 className="contact-info-spacing">My Number</h4>
            <p className="contact-info-spacing">(956)-537-8972</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-logo-box">
            <img className="contact-logo" src={email} alt="" />
          </div>
          <div>
            <h4 className="contact-info-spacing">Email</h4>
            <p className="contact-info-spacing">hmflores88@gmail.com</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-logo-box">
            <img className="contact-logo" src={social} alt="" />
          </div>
          <div>
            <h4 className="contact-info-spacing">LinkedIn</h4>
            <p className="contact-info-spacing">
              https://www.linkedin.com<br></br>/in/hector-floresm/
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3>Let's work together!</h3>
        <div className="name-email-box">
          <div className="name-email-layout">
            {/* <label className="contact-info-spacing" htmlFor="">
              Name
            </label>
            <p className="contact-info-spacing, contact-info-style">
              Required *
            </p> */}
            <input
              className="contact-input-user-info "
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
            />
          </div>
          <div className="name-email-layout">
            {/* <label className="contact-info-spacing" htmlFor="">
              Email
            </label>
            <p className="contact-info-spacing, contact-info-style">
              Required *
            </p> */}
            <input
              className="contact-input-user-info "
              type="text"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
        </div>
        {/* <label className="contact-info-spacing" htmlFor="">
          Subject
        </label>
        <p className="contact-info-spacing, contact-info-style">Required *</p> */}
        <input
          className="contact-input"
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
        />

        {/* <label className="contact-info-spacing" htmlFor="">
          Message
        </label>
        <p className="contact-info-spacing, contact-info-style">Required *</p> */}
        <textarea
          className="contact-input-message"
          type="text"
          name="message"
          id=""
          placeholder="Talk to me"
        />
        <button className="button">submit</button>
      </div>
    </div>
  );
};

export default Contact;
