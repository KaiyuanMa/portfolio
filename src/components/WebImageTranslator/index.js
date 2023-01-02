import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
      delay: 1,
    });
    gsap.from(".project-info-content", {
      duration: 1,
      y: "10px",
      stagger: 0.5,
      opacity: 0,
      ease: "power3",
      delay: 1,
    });
  });
  return (
    <div className="individual-project-page">
      <div className="individual-project-page-basic-info">
        <h1>Web Image Translator</h1>
        <div className="project-info-comment">
          A chrome extension that allows the user to translate text within
          images on the web page.
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Project Type</div>
          <div className="project-info-content">Individual</div>
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Duration</div>
          <div className="project-info-content">2022 Nov - 2022 Dec</div>
        </div>
        <div className="horizontal-line" />
        <div className="project-info-entry">
          <div className="project-info-label">Technology</div>
          <div className="project-info-content">
            CSS, Node, Express, Manifest v3
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
