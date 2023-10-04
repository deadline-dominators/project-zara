import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="callas">
          <h1>Call To Us</h1>
          <p>We are available 24/7, 7 days a week.</p>
          <p>phone +216 92580162</p>
        </div>
        <div className="border"></div>
        <div className="write">
          <h1> Write To Us </h1>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="contact-middle">
        <div className="first-input">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="lastName" name="lastName" />
          <input type="text" placeholder="email" name="email" />
        </div>
        <div className="second-input">
          <textarea placeholder="Put your comments here" />
        </div>
        <div className="contact-button">
          <button> send Message </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
