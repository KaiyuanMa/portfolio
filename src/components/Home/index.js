import React, { useEffect, useRef } from "react";
import Skills from "./Skills/Skills";
import Project from "./Projects/Project";
import Intro from "./Intro/Intro";
import Footer from "./Footer/Footer";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let smoother = ScrollSmoother.create({
      wrapper: "#smoother-wrapper",
      content: "#smoother-content",
      smooth: 1,
    });
  });
  return (
    <div id="smoother-wrapper">
      <div id="smoother-content">
        <div id="home">
          <Intro />
          <Skills />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
