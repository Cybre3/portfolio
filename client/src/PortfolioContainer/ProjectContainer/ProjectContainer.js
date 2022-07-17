import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";

import CardPC from "./CardPC";

import pic3DFMB from "../../assets/ProjectContainer/3DFMB.png";
import picCubeApp from "../../assets/ProjectContainer/cube-app.png";
import picVidApp from "../../assets/ProjectContainer/vid-tutorial-app.png";
import picWikiApp from "../../assets/ProjectContainer/wiki-app.png";

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
      title: "Wiki Blog",
      description: (
        <p className="skw">
          Express Gen blog application created while attending Kingsland University.
        </p>
      ),
      githubCode: "https://github.com/Cybre3/KingsWikiApp",
      projectLink: "https://kings-wiki-blog.herokuapp.com/",
      image: picWikiApp,
    },
    {
      title: "3dfmb",
      description: (
        <p className="skw">
          This family entertainment page is one of my very first project attempts. After teaching
          myself HTML and CSS, I decided to put what was learned to the test.
          <br />
          <br />
          <em> Note: The Social media links do not work because they do not exist.</em>
        </p>
      ),
      projectLink: "http://www.3dfmb.com",
      image: pic3DFMB,
    },
    {
      title: "Rubix Cube",
      description: (
        <p className="skw">
          One of my final Projects while attending Kingsland University. I really enjoyed working on
          this app.
        </p>
      ),
      githubCode: "https://github.com/Cybre3/cubeExpressGen",
      projectLink: "https://kings-cube-app.herokuapp.com/",
      image: picCubeApp,
    },
    /*    {
      title: "Zephlipgloss",
      description: "Eccomerce Lipgloss website",
      projectLink: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
      image:
        "https://d33wubrfki0l68.cloudfront.net/61b98b11d3e7375e5af0e4b7/screenshot_2021-12-15-06-31-17-0000.png",
    }, */
    {
      title: "Course Enroll",
      description: (
        <p className="skw">
          A partial app completed at Kingsland university. The main point of this app was to show
          knowledge of backend functionality; controllers, middleware, routes, models, encryption,
          and contingent user access. <br />
          **Create a user to test application**
        </p>
      ),
      githubCode: "https://github.com/Cybre3/KingsVideoTutorialApp",
      projectLink: "https://kings-video-course-app.herokuapp.com/",
      image: picVidApp,
    },
  ];

  const options = {
    autoplay: true,
    autoplayHoverPause: true,
    animateIn: "animate__fadeInRight",
    animateOut: "animate__zoomOut",
    items: 1,
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 1000,
  };

  return (
    <div className="project-container container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Projects"} subHeading={"Check out some of my work"} />
      <OwlCarousel className="owl-carousel container" {...options}>
        {projects.map((project, index) => (
          <CardPC
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            githubCode={project.githubCode}
            projectLink={project.projectLink}
          />
        ))}
      </OwlCarousel>
    </div>
  );
}

export default ProjectContainer;
