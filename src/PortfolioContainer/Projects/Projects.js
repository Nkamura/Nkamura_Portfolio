import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import shape from "../../../src/assets/projects/shape-bg.png";
import pythonImage from '../../../src/assets/projects/Python.png';

import './Projects.css'

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.FadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true.value,
    autoplay: true,
    smartSpeed: 850,
    responsive:{
      0:{
        items:2,
      },
      768:{
        items:2,
      },
      1000:{
        items:4,
      }
    }
  }

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"My projects"} />
      <section className="projects-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="projects-carousel" {...options}>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      College Project.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={pythonImage} alt="python-picture"></img>
                    <h5>Automation with Python</h5>
                    <p>
                      Language: Python
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      College Project.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={pythonImage} alt="python-picture"></img>
                    <h5>Automation with Python</h5>
                    <p>
                      Language: Python
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      College Project.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={pythonImage} alt="python-picture"></img>
                    <h5>Automation with Python</h5>
                    <p>
                      Language: Python
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comments">
                    <p>
                      <i className="fa fa-quote-left" />
                      College Project.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={pythonImage} alt="python-picture"></img>
                    <h5>Automation with Python</h5>
                    <p>
                      Language: Python
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
