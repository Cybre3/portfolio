import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <p>
        <i className="thankyou" style={{ fontFamily: "Caveat, cursive" }}>
          Thank you for visiting my page
        </i>
      </p>
      <span className="profile-role-tagline">
        I have a knack for troubleshooting and learning how to improve at a quick pace
      </span>
    </div>
  );
}

export default Home;
