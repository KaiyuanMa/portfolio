import React, { useEffect, useLayoutEffect } from "react";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import logo from "../../../public/img/sequirrelLogo.svg";
import sequirrel1 from "../../../public/img/sequirrel1.png";
import sequirrel2 from "../../../public/img/sequirrel2.png";
import sequirrel3 from "../../../public/img/sequirrel3.png";
import sequirrel4 from "../../../public/img/sequirrel4.png";
import sequirrel5 from "../../../public/img/sequirrel5.png";
import sequirrel6 from "../../../public/img/sequirrel6.png";
function index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    gsap.from(".individual-project-page-basic-info > h1", {
      duration: 1,
      y: "10px",
      stagger: 0.5,
      opacity: 0,
      ease: "power3",
      delay: 0.5,
    });
    gsap.from(".project-info-comment", {
      duration: 1,
      y: "10px",
      stagger: 0.5,
      opacity: 0,
      ease: "power3",
      delay: 0.5,
    });
    gsap.from(".project-info-label", {
      duration: 1,
      y: "10px",
      stagger: 0.5,
      opacity: 0,
      ease: "power3",
      delay: 0.5,
    });
    gsap.from(".project-info-content", {
      duration: 1,
      y: "10px",
      stagger: 0.5,
      opacity: 0,
      ease: "power3",
      delay: 0.5,
    });
    const tl = gsap.timeline();
    tl.to("#step-container", {
      delay: 1,
      opacity: 1,
      duration: 2,
    })
      .to(
        "#sequirrel-problem-question",
        {
          opacity: 0,
          duration: 2,
        },
        "+=1"
      )
      .to("#sequirrel-problem-question", {
        duration: 0,
        text: "What if you just need one?",
        ease: "none",
      })
      .to("#sequirrel-problem-question", {
        opacity: 1,
        duration: 2,
      })
      .to("#step-container-2", {
        opacity: 0,
        duration: 1,
      })
      .to(
        "#step-container-3",
        {
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .to(
        "#step-container-4",
        {
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .from("#step-container-sequirrel", { opacity: 0, duration: 1 }, "<");
    ScrollTrigger.create({
      animation: tl,
      trigger: "#sequirrel-problem",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
    });
    const tl2 = gsap.timeline();
    tl2
      .to("#sequirrel-features-page-title", {
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
      })
      .from(
        "#feature-model-container",
        { yPercent: -200, duration: 1, ease: "power3" },
        "<"
      )
      .from(
        "#feature-validation-container",
        { xPercent: -200, duration: 1, ease: "power3" },
        "<"
      )
      .from(
        "#feature-menu-container",
        { yPercent: 200, duration: 1, ease: "power3" },
        "<"
      )
      .from(
        "#feature-relationship-container",
        { xPercent: 200, duration: 1, ease: "power3" },
        "<"
      );
    ScrollTrigger.create({
      animation: tl2,
      trigger: "#sequirrel-features-page",
      start: "top top",
      end: "+=3000",
      scrub: true,
      snap: true,
      pin: true,
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);
  return (
    <div className="individual-project-page">
      <div className="individual-project-page-basic-info">
        <h1>Sequirrel</h1>
        <div className="project-info-comment">
          Sequirrel is a tool that allows developers to map out database
          relationships, and define models.
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Project Type</div>
          <div className="project-info-content">Individual</div>
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Duration</div>
          <div className="project-info-content">2022 SEP - 2022 OCT</div>
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Technology</div>
          <div className="project-info-content">
            Vanilla CSS, React, React Flow, React, Redux, Node.js, Express,
            Sequelize, JSZip, PostgreSQL
          </div>
        </div>
      </div>
      <div id="sequirrel-problem">
        <h1 id="sequirrel-problem-question">
          How many steps do you need to create a database ?
        </h1>
        <div id="step-container">
          {/* <div id="step-container-1">
                <h2>App Concept</h2>
                <i className="fa-regular fa-lightbulb"></i>
              </div> */}
          <div id="step-container-2">
            <h2>Define Models</h2>
            <i className="fa-solid fa-database"></i>
          </div>
          <div id="step-container-3">
            <h2>Map out relationships</h2>
            <i className="fa-solid fa-draw-polygon"></i>
          </div>
          <div id="step-container-4">
            <h2>Code</h2>
            <i className="fa-solid fa-code"></i>
          </div>
          <div id="step-container-sequirrel">
            <h2>Sequirrel</h2>
            <img src={logo}></img>
          </div>
        </div>
      </div>
      <div id="sequirrel-features-page">
        <div id="sequirrel-features-page-title">What it can do</div>
        <div id="sequirrel-features">
          <div
            className="sequirrel-feature-container"
            id="feature-model-container"
          >
            <div>Define Your Models</div>
            <img src={sequirrel4} />
          </div>
          <div
            className="sequirrel-feature-container"
            id="feature-validation-container"
          >
            <div>Validation</div>
            <img src={sequirrel5} />
          </div>
          <div
            className="sequirrel-feature-container"
            id="feature-menu-container"
          >
            <div>Menu</div>
            <img src={sequirrel6} />
          </div>
          <div
            className="sequirrel-feature-container"
            id="feature-relationship-container"
          >
            <div>Draw Out Relationships</div>
            <img src={sequirrel1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
