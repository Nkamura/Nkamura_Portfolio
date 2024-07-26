import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.FadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a dedicated and proactive Information Systems student with substantial hands-on experience in software maintenance, bug resolution, and project management. During my internship at ExxonMobil's Vendor Manager Office, I have successfully contributed to contract tracking using advanced technologies such as Python, SQL, OutSystems, HTML, and CSS.",
    highlights: {
      bullets: [
        "Proven expertise in software maintenance and bug fixing",
        "Skilled in Python, SQL, OutSystems, HTML, and CSS",
        "Demonstrated problem-solving and collaborative abilities",
        "Experienced in effective project management",
        "Quick to adapt and learn new technologies",
        "Dedicated to continuous learning and professional growth",
      ],
      heading: "Professional Highlights:",
    },
  };

  const renderHighLight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlights" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">Hire Me</button>
              <a
                href="CV_Gustavo_Nakamura.pdf"
                download="CV_Gustavo_Nakamura.pdf"
              >
                <button className="btn highlighted-btn">Get my Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
