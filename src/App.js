import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
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
        };
      }
    );
  };

  useEffect(() => {
    menuBackground();
  }, []);
  return (
    <HashRouter>
      <div className="nav">
        <div className="nav-bar">
          <a href="/" className="nav-bar-icon">
            logo
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
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutMe" element={<AboutMe />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
