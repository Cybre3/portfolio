import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Star</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 🔴",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Troubleshooter",
                    1000,
                  ]}
                />
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
            <a href="McCloudS_CV - Full Stack.pdf" download="McCloudS_CV - Full Stack.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;

/* 
 <div className="intro">
      <div className="introBlock">
        <h1>Hello, </h1>
        <h1 className="mb-4">
          I am <u className="underline">Star</u>rika McCloud
        </h1>
        <div className="typical">
          <h3>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Programmer",
                2000,
                "Troubleshooter",
                2000,
              ]}
            />
          </h3>
        </div>
      </div>
      <div className="introBlock">
        <a href="#/" className="resumeButton">
          View Resume
        </a>
        <a href="#/" className="resumeButton">
          Download Resume
        </a>
      </div>
      <p>
        <i className="thankyou" style={{fontFamily: "Caveat, cursive"}}>Thank you for visiting my page</i>
       </p>
    </div>
*/
