import React from "react";
import CardPC from "./CardPC";
import pic3DFMB from "../../assets/ProjectContainer/3DFMB.png";

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
      title: "Wiki App",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg",
    },
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
      image: pic3DFMB,
    },
    {
      title: "zephlipgloss",
      description: "Eccomerce Lipgloss website",
      projectLink: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
      image:
        "https://d33wubrfki0l68.cloudfront.net/61b98b11d3e7375e5af0e4b7/screenshot_2021-12-15-06-31-17-0000.png",
    },
    {
      title: "Rubix Cube",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg",
    },
    {
      title: "Rubix Cube",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.<br></br>{" "}
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg",
    },
  ];

  return (
    <div className="project-container container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Projects"} subHeading={"Check out some of my work"} />
      <CardPC projects={projects} />
    </div>
  );
}

export default ProjectContainer;
