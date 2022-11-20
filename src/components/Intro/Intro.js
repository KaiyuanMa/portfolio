import React from "react";
import IntroBackground from "./IntroBackground";

function Intro() {
  return (
    <div id="intro" className="full-page-scroll">
      <IntroBackground />
      <div id="intro-animation"></div>
      <div id="intro-text">
        <div className="title">Kaiyuan Ma</div>
        <div className="subtitle">
          Software Engineer <br />
          10 years experience with mouse and keyboard
          <br />
          8 years experience of Google Search, Youtube
          <br />3 years experience of Stack Overflow
        </div>
      </div>
    </div>
  );
}

export default Intro;
