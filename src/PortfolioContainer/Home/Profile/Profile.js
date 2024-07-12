import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "\u00A0Cybersecurity Enthusiast",
      "\u00A0Knowledge-hungry Dev",
      "\u00A0Continuous Learner",
      " Code Explorer",
    ].map((word) => word + " "),
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/Nkamura"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gustavo-riodi-nakamura/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://www.facebook.com/gustavo.riodinakamura.90"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/_nkamura/#"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span>
              {" "}
              Hello my name is <b>Gustavo Nakamura</b> and
              <br />
              <h1
                className="profile-details-role"
                style={{
                  fontSize: "40px",
                  marginLeft: "40px",
                  fontFamily: "cursive",
                  //textAlign: "left"
                }}
              >
                I am a{typeEffect}
              </h1>
              <span className="profile-role-tagline">
                delving into the dynamic realm of digital security. As a Systems
                Information student at UTFPR <br />I go beyond mere study, I'm
                on an immersive journey of perpetual learning and proactive
                exploration.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> 
               Hire Me 
            </button>
            <a
              href="CV_Gustavo_Nakamura.pdf"
              download="CV_Gustavo_Nakamura.pdf"
            >
              <button className="btn highlighted-btn">Get my Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
