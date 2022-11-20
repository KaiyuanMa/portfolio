import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./components/Home";

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
          <div className="nav-bar-icon"></div>
          <div className="nav-bar-toggle" onClick={menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="menu" className="left-hide">
          <div id="menu-items">
            <NavLink to="/" className="menu-item">
              Home
            </NavLink>
            <NavLink to="/" className="menu-item">
              Projects
            </NavLink>
            <NavLink to="/" className="menu-item">
              Background
            </NavLink>
            <NavLink to="/" className="menu-item">
              Contact
            </NavLink>
          </div>
          <div id="menu-background-pattern"></div>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
