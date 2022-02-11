import React from "react";
import navIconImg from "../pics/icons/SeekPng.com_storm-png_9639191.png";

function Nav(props) {
  return (
    <div className="nav">
      <a className="navicon" href="/#">
        <img src={navIconImg} alt="navicon" style={{ width: "40px", marginRight: "5px" }}></img>
        <b>Star</b>McCloud
      </a>
      <div className="navlinks">
        <a href="/#">Home</a>
        <a href="/#">Projects</a>
        <a href="/#">Coding Challenges</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
