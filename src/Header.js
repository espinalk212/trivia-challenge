import React from "react";
import "./Header.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  /* on mobile collapse left nav into hamburger menu, on larger devices do not show hamburger icon*/
  return (
    <div className="nav">
      <div className="left__nav">
        <MenuIcon fontSize="large" />
        <a
          href="https://github.com/espinalk212"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevinespinal212/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://espinalk212.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <AccountCircleIcon fontSize="large" />
        </a>
      </div>
      <div>
        <p>Trivia Challenge</p>
      </div>
      <div className="right__nav">
        <InfoIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Header;
