import React from "react";
import Typical from "react-typical";

class TypicalProfile extends React.PureComponent {
  render() {
    return (
      <Typical
        steps={[
          "Full Stack Developer 💻",
          1500,
          "MERN Stack Developer",
          1500,
          "Troubleshooter 🧰",
          1500,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    );
  }
}

export default TypicalProfile;
