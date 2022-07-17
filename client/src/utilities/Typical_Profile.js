import React from "react";
import Typical from "react-typical";

class TypicalProfile extends React.PureComponent {
  render() {
    return (
      <Typical
        steps={[
          "Full Stack Developer 💻",
          2500,
          "MERN Stack Developer",
          2500,
          "Troubleshooter 🧰",
          2500,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    );
  }
}

export default TypicalProfile;
