import React from "react";
import Skills from "./Skills";
import Project from "./Project";
import Intro from "./Intro/Intro";
import Footer from "./Footer";

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
