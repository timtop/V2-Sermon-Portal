import React from "react";

import vinyl from "../images/Vinyl.svg";

import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_text">
        Welcome to The New (Yaba) <br /> Sermon Portal
      </h1>
      <img className="vinyl" src={vinyl} alt="A vinyl player" />
    </div>
  );
};

export default Header;
