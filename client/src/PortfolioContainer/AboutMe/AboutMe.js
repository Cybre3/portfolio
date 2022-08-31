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
    description: `Transitioning careers, from Entertainment Technology to Full 
    Stack Development. I have used my troubleshooting skills to 
    assess, hindering, daily issues and provide simple yet effective 
    solutions. Some solutions include but not limited to: Scaling 
    organizational networks, advising technicians in problem solving, 
    troubleshooting programmed equipment behavior...`,
    highlights: {
      bullets: [
        '10 years of troubleshooting experience',
        `Scale organizational network by installing repeaters and 
        extended data points for efficiency and effectiveness.`,
        'Advise and lead other technicians in troubleshooting, problem solving and programming.',
        "Founder of 'Storehouse Strength'",
        "Owner of MTS - 'McCloud Lighting & Tech Solutions'",
        'Visited 20 Countries',
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
    <div className="about-me-container screen-container fade-in" id={props.id || ''}>
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
                Hire Me{' '}
              </button>
              <a href="McClousS_CV - Full Stack.pdf" download="McClousS_CV - Full Stack.pdf">
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
