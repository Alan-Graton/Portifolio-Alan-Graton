import React from "react";

import "./styles/styles.css";

// Logos
import GitHub_Logo from "./images/GitHub_Logo.svg";
import Instagram_Logo from "./images/Instagram_Logo.svg";
import LinkedIN_Logo from "./images/LinkedIN_Logo.svg";

function Social_INDEX() {
  return (
    <ul className="social-media-container">
      <li className="social-media">
        <a href="https://github.com/Alan-Graton">
          <img className="social-media-logo" src={GitHub_Logo} alt="GitHub Logo" />
        </a>
      </li>
      <li className="social-media">
        <a href="https://www.instagram.com/graton.alan">
          <img className="social-media-logo" src={Instagram_Logo} alt="Instagram Logo" />
        </a>
      </li>
      <li className="social-media">
        <a href="https://www.linkedin.com/in/alan-graton-louren%C3%A7o-de-brito-2695571b5/">
          <img className="social-media-logo" src={LinkedIN_Logo} alt="LinkedIN Logo" />
        </a>
      </li>
    </ul>
  );
}

export default Social_INDEX;
