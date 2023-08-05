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
        (JavaScript MERN) Full Stack Developer with 3 years of experience programming, coding,
        building, and maintaining web applications. Relocating to and looking for roles in Dallas,
        TX.
        <br />
        <br />
        My passion is in troubleshooting, executing tasks with precision, and giving meticulous
        attention to detail, always prioritizing the right approach over shortcuts.
        <br />
        My goals are working with others to solve relevant daily issues, enhance any place I
        encounter and ensure I leave the place better than how I initially found it.
      </p>
    ),

    highlights: {
      bullets: [
        '10 years of troubleshooting experience',
        'Reduced company maintenance expenses by 25% by maintaining / repairing equipment and updating Rep plots/venue schematics',
        'Reduced technician errors and equipment damage by creating incoming technician handover and technical documents. Documents increased technician autonomy and management performance',
        `Reduced company material expenses by 15%, conducting inventory on item lockers`,
        `Integrated platform by developing an administrative client portal equipped with dashboard UI, invoice/receipts, and employee access`,
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
