import React, { useEffect, useRef } from "react";
import Skills from "./Skills/Skills";
import Project from "./Projects/Project";
import Intro from "./Intro/Intro";
import Footer from "./Footer/Footer";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Home() {
  return (
    <div id="home">
      <Intro />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
