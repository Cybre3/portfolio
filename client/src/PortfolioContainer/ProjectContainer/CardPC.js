import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";

function CardPC(props) {
  const { projects } = props;

  const options = {
    loop: true,
    margin: 30,
    animateIn: "animate__fadeInRight",
    animateOut: "animate__zoomOut",
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    items: 1,
  };

  return (
    <OwlCarousel className="owl-carousel container" {...options}>
      {projects.map((project, index) => {
        const thisPage = index + 1;

        function numType(index) {
          if (thisPage % 2 !== 0) {
            return true;
          } else {
            return false;
          }
        }

        const pageIsOdd = numType(thisPage);

        return (
          <div className={`proj-page proj-page-${thisPage}`} key={index}>
            <div className="left">
              <div className="skewed">
                {pageIsOdd ? (
                  <div className="image">
                    <div className="proj-content">
                      <div
                        className="bgPic"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div className="proj-content text">
                    <h2 className="proj-heading">{project.title}</h2>
                    <div className="proj-description">{project.description}</div>
                    <div className="proj-btn-container">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-link-btn"
                      >
                        Live Demo
                      </a>
                      {project.githubCode ? (
                        <a
                          href={project.githubCode}
                          className="proj-github-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub Code
                        </a>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="right">
              <div className="skewed">
                {pageIsOdd ? (
                  <div className="proj-content text">
                    <h2 className="proj-heading">{project.title}</h2>
                    <div className="proj-description">{project.description}</div>
                    <div className="proj-btn-container">
                      <a
                        href={project.projectLink}
                        className="proj-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      {project.githubCode ? (
                        <a
                          href={project.githubCode}
                          className="proj-github-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub Code
                        </a>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="image">
                    <div className="proj-content">
                      <div
                        className="bgPic"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
}

export default CardPC;
