import React from "react";
import Typical from "react-typical";

class TypicalContactMe extends React.PureComponent {
  render() {
    return (
      <Typical
        steps={[
          "Get in touch through 📧",
          2000,
          "OR",
          2000,
          "Explore my social media pages",
          5000,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    );
  }
}

export default TypicalContactMe;

