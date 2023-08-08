import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

function Resume(props) {
  const [selectedBullletIndex, setSelectedBullletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  // const midDot = String.fromCharCode(183);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          {props.bullet === false ? null : <div className="heading-bullet"></div>}
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate || props.toDate ? (
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
    { label: 'Core Competencies / Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Systems', logoSrc: 'programming-skills.svg' },
    { label: 'Methods', logoSrc: 'programming-skills.svg' },
    { label: 'Assets', logoSrc: 'programming-skills.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
    { label: 'Full Resume Download', logoSrc: 'download-16.png' },
  ];

  const programmingSkillDetails = [
    { skill: 'Web Development' },
    { skill: 'JavaScript' },
    { skill: 'UI/UX' },
    { skill: 'Data/System Analysis and Integration' },
    { skill: 'Code Management' },
    { skill: 'Requirements Management' },
    { skill: 'Relationship Builder' },
    { skill: 'Strong Communicator' },
    { skill: 'Problem Solver' },
    { skill: 'Conceptual Thinking' },
  ];

  const systems = [
    { skill: 'Visual Studio Code' },
    { skill: 'IntelliJ' },
    { skill: 'NPM' },
    { skill: 'Terminal' },
    { skill: 'GitHub' },
    { skill: 'Git' },
    { skill: 'Netlify' },
    { skill: 'Heroku' },
    { skill: 'Railway' },
    { skill: 'Render' },
  ];

  const methods = [
    { skill: 'Version Control' },
    { skill: 'REST API' },
    { skill: 'Cache' },
    { skill: 'OOP (Object Oriented Programming)' },
    { skill: 'Functional Programming' },
    { skill: 'TDD (Test Driven Development)' },
    { skill: 'Code Optimization' },
  ];

  const assets = [
    { skill: 'TypeScript' },
    { skill: 'Redux' },
    { skill: 'Firebase' },
    { skill: 'jQuery' },
    { skill: 'Bootstrap' },
    { skill: 'Tailwind CSS' },
    { skill: 'Three.js' },
    { skill: 'React Three Fiber' },
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
      label: 'Gaming',
      description:
        "Favs: 'Assasins Creed', 'PC Building Simulator', 'Th3 Plan'. Fighting: 'Soul Caliber', 'Mortal Kombat', 'Dead or Alive'. My usual is multiplayer/co-op with family: 'Ghost Recon: Wildlands', 'Zero Hour', 'COD-MW3', 'Black Ops-Zombies or Gun Game', 'Heave Ho'. RPG games: 'Forest', 'LOSTARK', 'State of Decay'",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Kingsland University'}
        subHeading={'Certified Full Stack Developer'}
        fromDate={'2020 '}
        toDate={' 2021'}
      />
      <ResumeHeading
        heading={'Mercer County Community College'}
        subHeading={'65 Credit Hours'}
        fromDate={'2009 '}
        toDate={' 2015'}
      />
    </div>,
    <div
      className="resume-screen-container justify-content-start overflow-auto pt-4"
      key="work-experience"
    >
      <ResumeHeading
        heading={'Shalom Ministry (Non-Profit)'}
        subHeading={'Full Stack Developer (Volunteer)'}
        fromDate={'Oct. 2022 '}
        toDate={' Current'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          • Maximize company meeting slots with proper code management, code modules and snippets,
          to quickly edit demos; promotes simple/proactive debugging and refactoring.
        </span>
        <span className="resume-description-text">
          • Perform data analysis and integration by developing client portal equipped with data
          visualization and employee access.
        </span>
        <span className="resume-description-text">
          • Design and deploy functional demos to clients using Netlify/Heroku/Railway
        </span>
      </div>
      <ResumeHeading
        heading={'McCloud Lighting & Tech Solutions (MTS)'}
        subHeading={'Lighting Technician/Designer'}
        fromDate={'2013 '}
        toDate={' 2022'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          • Scaled client organizational network, installed signal repeaters, and extended data
          points, reducing tech install time and increasing technical rehearsal performance.
        </span>
        <span className="resume-description-text">
          • Prevented technical interruptions and reduced equipment damage rate by troubleshooting
          client electrical circuits, signal connections, lighting software and intelligent lighting
          fixtures.
        </span>
        <span className="resume-description-text">
          • Analyzed client needs to prioritize and maximize client time slots.
        </span>
        <span className="resume-description-text">
          • Consulted potential clients on cost friendly and efficient equipment and options.
        </span>
      </div>
      <ResumeHeading
        heading={'Norwegian Cruise Line'}
        subHeading={'Principal/Senior Lighting Technician'}
        fromDate={'2018 '}
        toDate={' 2020'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          • Reduced company material expenses by 15%, conducting inventory on item lockers.
        </span>
        <span className="resume-description-text">
          • Advised and led technicians in troubleshooting, problem solving and programming within
          their venues, increasing technical functionality.
        </span>
        <span className="resume-description-text">
          • Reduced damage and shutdown rate by analyzing and troubleshooting electrical circuits,
          signal connections, lighting software and intelligent lighting fixtures.
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
    <div className="resume-screen-container programming-skills-container" key="medthods">
      {systems.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container programming-skills-container" key="methods">
      {methods.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container programming-skills-container" key="assets">
      {assets.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container interests-container" key="interests">
      {interests.map((interest, index) => (
        <div className="interest-parent" key={index}>
          <ResumeHeading
            key={index}
            heading={interest.label}
            description={interest.description}
            bullet={false}
          />
        </div>
      ))}
    </div>,
    <div
      className="resume-screen-container full-resume-download-container"
      key="full-resume-download"
    >
      <div className="resume-preview">
        <img
          src={require('../../assets/Resume/McCloudS_FullStack_Resume_2023.png')}
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
