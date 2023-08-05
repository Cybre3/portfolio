import React from "react";

function CardPC(props) {
  const { index, title, image, description, projectLink, githubCode } = props;
  const thisPage = index + 1;

  function numType(thisPage) {
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
                <div className="bgPic" style={{ backgroundImage: `url(${image})` }}></div>
              </div>
            </div>
          ) : (
            <div className="proj-content">
              <div className="proj-text">
                <h2 className="proj-heading">{title}</h2>
                <div className="proj-description">{description}</div>
              </div>
              <div className="proj-btn-container">
                <a href={projectLink} target="_blank" rel="noreferrer" className="proj-link-btn">
                  View Website
                </a>
                {githubCode ? (
                  <a href={githubCode} className="proj-github-btn" target="_blank" rel="noreferrer">
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
            <div className="proj-content">
              <div className="proj-text">
                <h2 className="proj-heading">{title}</h2>
                <div className="proj-description">{description}</div>
              </div>
              <div className="proj-btn-container">
                <a href={projectLink} className="proj-link-btn" target="_blank" rel="noreferrer">
                  View Website
                </a>
                {githubCode ? (
                  <a href={githubCode} className="proj-github-btn" target="_blank" rel="noreferrer">
                    GitHub Code
                  </a>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="image">
              <div className="proj-content">
                <div className="bgPic" style={{ backgroundImage: `url(${image})` }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardPC;
