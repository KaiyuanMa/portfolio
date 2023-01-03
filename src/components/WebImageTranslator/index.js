import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import "./styles.css";

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
    const tl = gsap.timeline();
    tl.to(".web-img-problem-text", {
      delay: 1,
      backgroundColor: "rgb(25, 25, 25)",
      borderColor: "rgba(255, 255, 255, 0.5)",
      duration: 2,
    })
      .to(
        ".web-img-problem-text-imgText",
        {
          opacity: 1,
          duration: 2,
        },
        "<"
      )
      .to(
        "#web-img-problem-title",
        {
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .to("#web-img-problem-title", {
        duration: 0,
        text: "What about images?",
        ease: "none",
      })
      .to("#web-img-problem-title", {
        opacity: 1,
        duration: 1,
      });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#web-img-problem",
      start: "top top",
      scrub: true,
      pin: true,
      // markers: true,
    });
  }, []);
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
      <div id="web-img-problem">
        <div id="web-img-problem-title" className="project-page-title">
          Translating text is easy
        </div>
        <div id="web-img-problem-content">
          <div className="web-img-problem-text web-img-problem-img">
            Hello, My name is Kaiyuan Ma
            <div className="web-img-problem-text-imgText">.img</div>
          </div>
          <i class="fa-solid fa-arrow-right"></i>
          <div className="web-img-problem-text web-img-problem-img">
            你好，我的名字是马开元
            <div className="web-img-problem-text-imgText">.img</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
