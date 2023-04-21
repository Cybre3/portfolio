import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

function Resume(props) {
  const [selectedBullletIndex, setSelectedBullletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const midDot = String.fromCharCode(183);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + '-' + props.toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
    { label: 'Full Resume Download', logoSrc: 'McCloudS_FullStack_Resume_2023_Updated.pdf.png' },
  ];

  const programmingSkillDetails = [
    { skill: 'MERN' },
    { skill: 'JavaScript | TypeScript' },
    { skill: 'MongoDB | NoSQL' },
    { skill: 'Git | GitHub' },
    { skill: 'Express JS' },
    { skill: 'Postman' },
    { skill: 'React JS' },
    { skill: 'REST Services' },
    { skill: 'Node JS' },
    { skill: 'Mocha | Chai | Jest' },
    { skill: 'HTML | CSS | Bootstrap | Tailwind CSS' },
    { skill: 'Netlify | Heroku | Render | Railway' },
  ];

  const interests = [
    {
      label: 'Rock Climbing',
      description:
        'Rock Climbing is another way for me work all parts of my body and fully focus my mind on accomplishing one goal, getting to the top.',
    },
    {
      label: 'Reading',
      description:
        'I am constantly reading material that will help me improve. I love lerning new things and discovering new perspectives',
    },
    {
      label: 'Basketball',
      description:
        'One of my favorite sports. I played in elementary and middle school. Although, I respect practice and technique more than I did in my younger years.',
    },
    {
      label: 'Video Games',
      description:
        "Favs: 'Assasins Creed', 'PC Building Simulator', 'Th3 Plan'. Fighting: 'Soul Caliber', 'Mortal Kombat', 'Dead or Alive'. My usual is multiplayer/co-op with family: 'Ghost Recon: Wildlands', 'Zero Hour', 'COD-MW3', 'Black Ops-Zombies or Gun Game', 'Heave Ho'. RPG games: 'Forest', 'LOSTARK', 'State of Decay'",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Kingsland University'}
        subHeading={'Certified Full Stack Developer'}
        fromDate={'2020'}
        toDate={'2021'}
      />
      <ResumeHeading
        heading={'Mercer County Community College'}
        subHeading={'Entertainment Technology'}
        fromDate={'2012'}
        toDate={'2016'}
      />
      <ResumeHeading
        heading={'Mercer County Community College'}
        subHeading={'Electronic Engineering Technology'}
        fromDate={'2009'}
        toDate={'2011'}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={'Full Stack Developer'}
        subHeading={'Shalom Ministry'}
        fromDate={'2022'}
        toDate={'Current'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Successfully tailored UI/UX for client customer digest by collaborating with client
          design team using google meets/messaging.
        </span>
        <br />
        <span className="resume-description-text">
          - Proactively prevented the need for multiple organization platforms by developing a
          dashboard UI, invoice/receipts, etc., for administrators/client to manage/access records
          and events.
        </span>
        <br />
        <span className="resume-description-text">
          - Optimized back-end for effective debugging by developing routing/middleware/logging with
          Express/MongoDB/robust libraries.
        </span>
        <br />
        <span className="resume-description-text">
          - Promoted site credibility by developing secured user entry using front-end validation,
          Cookies, JSON Web Token and hashing.
        </span>
        <br />
        <span className="resume-description-text">
          - Promoted active collaboration with clients using Netlify/Heroku/Railway to deploy
          functional demos for clients to preview.
        </span>
        <br />
        <span className="resume-description-text">
          - Enabled informative bug fixes in a timely manner by utilizing Winston npm and Mongo DB
          to log errors to database.
        </span>
        <br />
        <span className="resume-description-text">
          - Maximized company meetings by leveraging separated/organized/reusable code modules and
          snippets, to quickly edit demos on the fly; promotes simple/proactive debugging and
          refactoring.
        </span>
      </div>
    </div>,
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container interests-container" key="interests">
      {interests.map((interest, index) => (
        <div className="interest-parent" key={index}>
          <ResumeHeading key={index} heading={interest.label} description={interest.description} />
        </div>
      ))}
    </div>,
    <div
      className="resume-screen-container full-resume-download-container"
      key="full-resume-download"
    >
      <div className="resume-preview">
        <img
          src={require('../../assets/Resume/McCloudS_FullStack_Resume_2023_Updated.pdf.png')}
          alt="resumePreview"
          width="400px"
        />
      </div>
      <a href="McCloudS_FullStack_Resume_2023.pdf" download="McCloudS_FullStack_Resume_2023.pdf">
        <button className="get-full-resume-btn">Download Full Resume</button>
      </a>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 440;
    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBullletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBullletIndex ? 'bullet selected-bullet' : 'bullet'}
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div style={carousalOffSetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'Formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
