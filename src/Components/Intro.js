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
  );
}

export default Intro;
