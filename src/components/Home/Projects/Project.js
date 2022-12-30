import React, { useEffect } from "react";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Route, Routes, NavLink, Link, BrowserRouter } from "react-router-dom";

function Project() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to("#sequirrel", { scale: 0.9, delay: 5, duration: 3 })
      .to("#board-company", {
        yPercent: -100,
        duration: 10,
      })
      .to("#board-company", { delay: 5 });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#project-page",
      start: "top top",
      end: "+=4000",
      scrub: 0.5,
      pin: true,
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);
  return (
    <div id="project-page">
      <div className="project full-page-scroll" id="sequirrel">
        <div className="project-basic-info">
          <div className="project-tags">
            <div className="project-tag">Personal Project</div>
          </div>
          <a href="https://sequirrel.herokuapp.com/" target="_blank">
            <div className="project-name">Sequirrel</div>
          </a>
          <div className="project-techs">
            <div className="project-tech">React</div>
            <div className="project-tech">Node.js</div>
            <div className="project-tech">React Flow</div>
            <div className="project-tech">React Redux</div>
            <div className="project-tech">Express</div>
          </div>
        </div>
        <Link to="/sequirrel">
          <div className="project-link-btn">Learn More</div>
        </Link>
      </div>
      <div className="project full-page-scroll" id="board-company">
        <div className="project-basic-info">
          <div className="project-tags">
            <div className="project-tag">Team Project</div>
          </div>
          <a href="https://the-board-company.herokuapp.com/" target="_blank">
            <div className="project-name" id="board-company-title">
              The Board Company
            </div>
          </a>
          <div className="project-techs">
            <div className="project-tech">React</div>
            <div className="project-tech">Node.js</div>
            <div className="project-tech">React Redux</div>
            <div className="project-tech">Express</div>
          </div>
        </div>
        <NavLink to="/boardCompany">
          <div className="project-link-btn">Learn More</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Project;
