import React from "react";
// import codingPic from "./codingPic.png";

import "./SkewedScroll.scss";
import $ from "jquery";

$(document).ready(function () {
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage)
      .removeClass("inactive")
      .addClass("active");
    $(pgPrefix + (curPage + 1)).removeClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  }

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  }

  $(document).on("mousewheel DOMMouseScroll touchstart touchmove", function (e) {
    e.target.className.includes("skw") ? disableScroll() : enableScroll();
  });

  $(".skw-pages").on("mousewheel DOMMouseScroll touchstart touchmove", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
});

function preventDefault(e) {
  e.preventDefault();
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      // eslint-disable-next-line
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
}

const ProjectScrewedOnePageScroll = (props) => {
  const { projects } = props;

  return (
    <div className="skw-pages m-5 rounded">
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
          <div className={`skw-page skw-page-${thisPage} active`} key={index}>
            <div className="skw-page__half skw-page__half--left">
              <div className="skw-page__skewed">
                {pageIsOdd ? (
                  <div className="skw-page__content"></div>
                ) : (
                  <div className="skw-page__content">
                    <h2 className="skw-page__heading">{project.title}</h2>
                    <p className="skw-page__description">{project.description}</p>
                    <a className="buttonProj skw" href={project.projectLink}>
                      Live Demo
                    </a>

                    {project.githubCode ? (
                      <a href={project.githubCode} className="buttonProj skw">
                        GitHub Code
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            <div className="skw-page__half skw-page__half--right">
              <div className="skw-page__skewed">
                {pageIsOdd ? (
                  <div className="skw-page__content">
                    <h2 className="skw-page__heading">{project.title}</h2>
                    <div className="skw-page__description">{project.description}</div>
                    <a href={project.projectLink} className="buttonProj skw">
                      Live Demo
                    </a>
                    {project.githubCode ? (
                      <a href={project.githubCode} className="buttonProj skw">
                        GitHub Code
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <div className="skw-page__content"></div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectScrewedOnePageScroll;
