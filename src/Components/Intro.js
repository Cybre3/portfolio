import React from "react";
import Typical from "react-typical";

function Intro(props) {
  return (
    <div className="intro">
      <div className="introBlock">
        <h1>Hello, </h1>
        <h1>
          I am <u className="underline">Star</u>rika McCloud
        </h1>
        <div className="typical">
          <h2>
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
          </h2>
        </div>
      </div>
      <div className="introBlock">
        <a href="#/" className="resumeButton">
          See My Resume
        </a>
        <a href="#/" className="resumeButton">
          Download my Resume
        </a>
      </div>
      <h3>
        <i style={{fontFamily: "Caveat, cursive"}}>Thank you for visiting my page</i>
      </h3>
    </div>
  );
}

export default Intro;
