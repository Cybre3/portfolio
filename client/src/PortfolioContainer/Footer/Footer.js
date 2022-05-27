import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="text-center p-3" style={{ backgroundColor: "#f2e9de" }}>
        <div className="col">
          <a href="https://www.facebook.com/star.mccloud">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/starrika-mccloud-802a251a1/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/xybri/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/Cybre3">
            <i className="fa fa-github"></i>
          </a>
        </div>
        This Has Been Fun! Come Again!
      </div>
    </footer>
  );
}

export default Footer;
