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
    description: (
      <p>
        <strong className='text-center'>Web Application Development ~ Process Analysis ~ Data/Decision Analytics</strong>
        <br />
        <br />
        My passion is designing, developing, and maintaining web applications on all architectural
        levels. Collaborate with product owners, stakeholders, and technical teams to ensure
        solutions foster innovation, solve everyday challenges, and deliver client-oriented results.
        <br />
        Energetically work to enhance the customer’s User Interface/User Experience and decision
        support capabilities; take ownership in carrying out troubleshooting and code refactoring
        for improving application performance; manage backend databases; and look for ways to
        continually learn, add value, and inspire other team members throughout the project
        lifecycle.
      </p>
    ),

    highlights: {
      bullets: [
        'A decade of troubleshooting experience',
        'Reduce bug-fix ticket turn-around by 75%, utilizing code management and logging',
        'Streamline application and database release cycle, expediting customer demo release times',
        `Performed System updates to company rep plots and venue / system schematics, maintained / repaired equipment, reducing client maintenance expenses by 25%`,
        `Reduced technician errors and equipment damage by creating incoming technician handover and technical documents. Documents increased technician autonomy and management performance`,
      ],
      heading: 'Here are a few highlights:',
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight position-relative" key={i}>
        <div className="highlight-blob position-absolute top-0 mt-1"></div>
        <span className="mx-2 px-3">{value}</span>
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
