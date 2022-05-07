import React from "react";
import ProjectScrewedOnePageScroll from "./ProjectScrewedOnePageScroll";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ProjectConatiner.css";

function ProjectContainer(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projects = [
    {
      title: "3dfmb",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
    },
    {
      title: "zephlipgloss",
      description: "Eccomerce Lipgloss website",
      projectLink: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
    },
    {
      title: "3dfm",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
    },
  ];


  return (
    <div className="project-container container">
      <ScreenHeading title={"Projects"} subHeading={"Check out some of my work"} />
      <ProjectScrewedOnePageScroll projects={projects} />
    </div>
  );
}

export default ProjectContainer;
