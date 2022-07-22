import React from "react";
import "./index.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneSquare,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-page">
      <h1>Let's work together</h1>
      <div className="socials">
        <div className="social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anas-yaseen-58aab7187/"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <span>Linkedin</span>
        </div>
        <div className="social">
          <a
            target="_blank"
            href="https://github.com/anasomar1"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <span>Github</span>
        </div>
        <div className="social">
          <FaPhoneSquare />
          <span>
            <span>(+962)</span> 787536029
          </span>
        </div>
        <div className="social">
          <a
            target="_blank"
            href="mailto:anasyaseen1@outlook.com"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <span>Email</span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
