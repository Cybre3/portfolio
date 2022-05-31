import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

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
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + "-" + props.toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "Express JS" },
    { skill: "Node JS" },
    { skill: "MongoDB | Firebase" },
    { skill: "HTML | CSS" },
    { skill: "Git | GitHub" },
    { skill: "Mongoose" },
    { skill: "Postman" },
    { skill: "PHP" },
    { skill: "Mocha | Chai" },
    { skill: "Netlify | Heroku" },
  ];

  const interests = [
    {
      label: "Rock Climbing",
      description:
        "Rock Climbing is another way for me work all parts of my body and fully focus my mind on accomplishing one goal, getting to the top.",
    },
    {
      label: "Investing / Day Trading",
      description:
        "The reasearch never stops.  have not been trading as long I would have liked, but learning new things everyday.",
    },
    {
      label: "Non-Profit Work",
      description:
        "I am the Founder of a  non-profit called 'Storehouse Strength'. The Corporation was created to provide counseling, exclusively to cruise ship crew members.",
    },
    {
      label: "Reading",
      description:
        "I am constantly reading material that will help me improve. I love lerning new things and discovering new perspectives",
    },
    {
      label: "Basketball",
      description:
        "One of my favorite sports. I played in elementary and middle school. Although, I respect practice and technique more than I did in my younger years.",
    },
    {
      label: "Video Games",
      description:
        "Favs: 'Assasins Creed', 'PC Building Simulator', 'Th3 Plan'. Fighting: 'Soul Caliber', 'Mortal Kombat', 'Dead or Alive'. My usual is multiplayer/co-op with family: 'Ghost Recon: Wildlands', 'Zero Hour', 'COD-MW3', 'Black Ops-Zombies or Gun Game', 'Heave Ho'. RPG games: 'Forest', 'LOSTARK', 'State of Decay'",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kingsland University"}
        subHeading={"Certified FullStack Developer"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Mercer County Community College"}
        subHeading={"Entertainment Technology"}
        fromDate={"2012"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Mercer County Community College"}
        subHeading={"Electronic Engineering Technology"}
        fromDate={"2009"}
        toDate={"2011"}
      />
      <ResumeHeading
        heading={"Trenton Central High School"}
        subHeading={"Applied Engineering"}
        fromDate={"2006"}
        toDate={"2009"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Mercer County, New Jersey - Free Lance"}
        subHeading={`Lighting Technician and Designer ${midDot} Freelancer ${midDot} MTS`}
        fromDate={"2013"}
        toDate={"2020"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Started a tech company for lighting technician work and Full Stack Development
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Maintained shows, designed and programmed lights for events
        </span>
        <br />
        <span className="resume-description-text">- Maintained and repaired equipment</span>
        <br />
        <span className="resume-description-text">
          - Collaborate with Directors to help accomplish their live performance vision with Light
        </span>
        <br />
        <span className="resume-description-text">
          - Updated Lighting grid for theaters as well as installing new equipment.
        </span>
      </div>
      <ResumeHeading
        heading={"Norwegian Cruise Line"}
        subHeading={"Lighting Technician"}
        fromDate={"2018"}
        toDate={"2020"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Maintained shows and designed lights for events
        </span>
        <br />
        <span className="resume-description-text">- Maintained and repaired equipment </span>
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
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 380;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBullletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBullletIndex ? "bullet selected-bullet" : "bullet"}
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
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Formal Bio Details"} />
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
