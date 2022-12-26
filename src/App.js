import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Sequirrel from "./components/Sequirrel";
import TheBoardCompany from "./components/TheBoardCompany";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import "./styles.css";

function App() {
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // let smoother = ScrollSmoother.create({
  //   wrapper: "#smoother-wrapper",
  //   content: "#smooth-content",
  //   smooth: 1,
  // });

  const menuToggle = () => {
    const toggleBtn = document.querySelector(".nav-bar-toggle");
    const menu = document.querySelector("#menu");
    toggleBtn?.classList?.toggle("nav-bar-toggle-active");
    menu?.classList?.toggle("left-hide-active");
  };
  const menuBackground = () => {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
          console.log(index);
        };
      }
    );
  };

  useEffect(() => {
    gsap.from(".nav-bar-icon", {
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });
    gsap.from(".nav-bar-toggle", {
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });
    menuBackground();
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="nav-bar">
          <a className="nav-bar-icon" href="/">
            K
          </a>
          <div className="nav-bar-toggle" onClick={menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="menu" className="left-hide">
          <div id="menu-items">
            <NavLink to="/" className="menu-item" onClick={menuToggle}>
              Home
            </NavLink>
            <NavLink to="/aboutMe" className="menu-item" onClick={menuToggle}>
              About Me
            </NavLink>
            <NavLink to="/contact" className="menu-item" onClick={menuToggle}>
              Contact
            </NavLink>
          </div>
          <div id="menu-background-pattern"></div>
        </div>
      </div>
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutMe" element={<AboutMe />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sequirrel" element={<Sequirrel />} />
          <Route
            exact
            path="/the-board-company"
            element={<TheBoardCompany />}
          />
        </Routes>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
