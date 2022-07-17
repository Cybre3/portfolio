import React from "react";

import ScrollService from "../../../utilities/ScrollService";
import TypicalProfile from "../../../utilities/Typical_Profile";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">
                <span className="partial-name">Star</span>
                rika
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <TypicalProfile />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="McClousS_CV - Full Stack.pdf" download="McClousS_CV - Full Stack.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;