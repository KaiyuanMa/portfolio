import React from "react";
import IntroBackground from "./IntroBackground";

function Intro() {
  return (
    <div id="intro" className="full-page-scroll">
      <IntroBackground />
      <div id="intro-animation"></div>
      <div id="intro-text">
        <div className="title">Kaiyuan Ma</div>
        <div className="subtitle">Software Engineer</div>
      </div>
    </div>
  );
}

export default Intro;
