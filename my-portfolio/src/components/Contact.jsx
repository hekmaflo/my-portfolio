import React from "react";

const Contact = () => {
  return (
    <div className="More">
      <div className="all-info">
        <div className="contact-info">
          <h4 className="contact-info-spacing">My Number</h4>
          <p className="contact-info-spacing">(956)-537-8972</p>
        </div>
        <div className="contact-info">
          <h4 className="contact-info-spacing">Email</h4>
          <p className="contact-info-spacing">hmflores88@gmail.com</p>
        </div>
        <div className="contact-info">
          <h4 className="contact-info-spacing">LinkedIn</h4>
          <p className="contact-info-spacing">www.linkedin.com/hmflores88</p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Shoot me</h3>
        <div className="name-email-box">
          <input
            className="contact-input-user-info "
            type="text"
            name="name"
            id=""
            placeholder="Full Name"
          />
          <input
            className="contact-input-user-info "
            type="text"
            name="email"
            id=""
            placeholder="Email"
          />
        </div>
        <input
          className="contact-input"
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
        />
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
