import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: `3 years as a Full Stack Developer (MERN JavaScript) and 10 years of Entertainment Technology experience. Over the years, I have successfully brought to life, ideas and concepts articulated by directors and creative teams. Years of experience obtained as a technician have put me ahead of the game in the Full Stack Development space. 
`,
    highlights: {
      bullets: [
        '10 years of troubleshooting experience',
        'Repaired and troubleshot various types of equipment (increasing the equipment’s life span and saving company resources)',
        'Documented procedures for technicians and managers (allowing smooth transition and employee autonomy)',
        `Advised colleagues on concepts and procedures (increasing company productivity)`,
        `Scaled organizational networks (increasing production and maximizing scheduled timeslots)`,
      ],
      heading: 'Here are a few highlights:',
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ''}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {''}
                Contact Me{' '}
              </button>
              <a
                href="McCloudS_FullStack_Resume_2023.pdf"
                download="McCloudS_FullStack_Resume_2023.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
