import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.FadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"My projects"} />
      <section className="projects-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="projects-carousel">
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
                    <img src="/public/png/fire.png" alt="python-picture"></img>
                    <h5>Project name</h5>
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
    </div>
  );
}
