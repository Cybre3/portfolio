import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="text-center p-3" style={{ backgroundColor: "#f2e9de" }}>
        <div className="col">
          <a href="#/">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#/">
            <i className="fa fa-github"></i>
          </a>
          <a href="#/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        This Has Been Fun! Come Again!
      </div>
    </footer>
  );
}

export default Footer;
