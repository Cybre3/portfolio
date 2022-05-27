import React, { useState } from "react";
import ScrollService from "../utilities/ScrollService";

import { TOTAL_SCREENS } from "../utilities/commonUtils";
import "./PortfolioConatiner.css";

export default function PortfolioConatiner() {
  const [scrollBtnDisplay, setScrollBtnDisplay] = useState("none");
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setScrollBtnDisplay("block");
    } else {
      setScrollBtnDisplay("none");
    }
  }

  return (
    <div className="portfolio-container">
      {mapAllScreens()}
      <button
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
        style={{ display: scrollBtnDisplay }}
        id="back-to-top-btn"
      >
        <i className="bi bi-chevron-bar-up"></i>
      </button>
    </div>
  );
}
