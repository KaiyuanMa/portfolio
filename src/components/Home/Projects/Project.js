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
      .to("#web-image", {
        yPercent: -100,
        duration: 10,
      })
      .to("#web-image", { delay: 5 })
      .to("#web-image", { scale: 0.9, delay: 5, duration: 3 })
      .to("#board-company", {
        yPercent: -200,
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
        <div className="project-link-btn-container">
          <Link to="/sequirrel">
            <div className="project-link-btn">Learn More</div>
          </Link>
          <a href="https://sequirrel.herokuapp.com/" target="_blank">
            <div className="project-link-btn">Live Site</div>
          </a>
        </div>
      </div>
      <div className="project full-page-scroll" id="web-image">
        <div className="project-basic-info">
          <div className="project-tags">
            <div className="project-tag">Personal Project</div>
          </div>
          <a
            href="https://chrome.google.com/webstore/detail/web-image-translator/hoboigmahmnghbeknkljmfnnnaajpmbe?hl=zh-CN&authuser=0"
            target="_blank"
          >
            <div className="project-name" id="board-company-title">
              Web Image Translator
            </div>
          </a>
          <div className="project-techs">
            <div className="project-tech">Google Cloud</div>
            <div className="project-tech">Node.js</div>
            <div className="project-tech">Manifest v3</div>
            <div className="project-tech">Express</div>
          </div>
        </div>
        <div className="project-link-btn-container">
          {/* <NavLink to="/webImage"> */}
          <div className="project-link-btn project-link-btn-disabled">
            Learn More
          </div>
          {/* </NavLink> */}
          <a href="https://github.com/KaiyuanMa/imgChrome" target="_blank">
            <div className="project-link-btn">Github Link</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
