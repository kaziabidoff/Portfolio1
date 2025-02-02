import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="glow-light"></div>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:kaziabidoff@gmail.com">kaziabidoff@gmail.com</a></p>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/kazi-abiduzzaman" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/kaziabidoff" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/adi.abi.58173/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <img src="/images/twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
