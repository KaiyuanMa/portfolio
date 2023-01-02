import React, { useEffect } from "react";
import IntroBackground from "./IntroBackground";
import "./styles.css";
import gsap from "gsap";

function Intro() {
  useEffect(() => {
    gsap.from(".animation-text", {
      duration: 1,
      y: "100%",
      stagger: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <div id="intro" className="full-page-scroll">
      <a href="https://github.com/KaiyuanMa/portfolio" target="_blank">
        <div id="portfolio-link">
          <i class="fa-brands fa-square-github"></i> Site is under development
        </div>
      </a>
      <IntroBackground />
      <div id="intro-text">
        <div className="title">
          <div className="animation-text">Kaiyuan Ma</div>
        </div>
        <div className="subtitle">
          <div className="animation-text">Software Engineer</div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
