import "./Resume.css";
import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.FadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
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
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "C", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Outsystems", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "React", ratingPercentage: 85 },
    { skill: "HTML & CSS", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Mobile E-shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online with payment system integration.",
      subHeading:
        "Technologies Used: React Native, MongoDB, Express JS, Node JS, Redux.",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration, both Paypal and Stripe.",
      subHeading:
        "Technologies Used: MongoDB, Express JS, React JS, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Federal University of Technology - Paraná"}
        subHeading={"BACHELOR OF INFORMATION SYSTEMS"}
        fromDate={"2023"}
        toDate={"2026"}
      />
      <ResumeHeading
        heading={"Federal University of Technology - Paraná"}
        subHeading={"Engineering (Not Completed)"}
        description={
          "T#ESTESATTWE."
        }
        fromDate={"2017"}
        toDate={"2023"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"ExxonMobil"}
          subHeading={"Vendor Manager Office Intern"}
          fromDate={"2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working in the Vendor Manager Office, handling code maintenance, bug fixing, and overseeing the work of others.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Responsible for maintaining code and fixing bugs in Python, SQL, OutSystems, HTML, and CSS.
          </span>
          <br />
          <span className="resume-description-text">
            - Involved in a project tracking contracts between ExxonMobil and external vendors, from start to finish.
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
  <ResumeHeading
    heading={"Federal University of Technology - Paraná"}
    subHeading={"Intern"}
    fromDate={"August 2019"}
    toDate={"March 2020"}
  />
  <div className="experience-description">
    <span className="resume-description-text">
      Assisted in developing combined spreadsheets for equipment maintenance control and attended to service orders from the department.
    </span>
  </div>
  <div className="experience-description">
    <span className="resume-description-text">
      - Executed administrative routines and provided support to the IT department.
    </span>
  </div>
</div>

    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    /* INTERESTS */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gym"
        description="I enjoy working out at the gym to maintain a healthy lifestyle and relieve stress."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to music is a great way for me to relax and unwind. I enjoy exploring new genres and artists."
      />
      <ResumeHeading
        heading="Walking and Biking"
        description="I love spending time outdoors, walking, and biking to explore new places and stay active."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
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
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
