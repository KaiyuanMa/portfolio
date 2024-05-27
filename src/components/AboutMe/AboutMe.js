import React, { useEffect, useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function AboutMe() {
  useEffect(() => {
    gsap.from(".box-header", {
      duration: 1,
      y: "10px",
      opacity: 0,
      ease: "power3",
      delay: 1,
    });
    gsap.from(".box-content", {
      duration: 1,
      y: "10px",
      opacity: 0,
      ease: "power3",
      delay: 1.5,
    });
  }, []);
  return (
    <div className="about-page">
      <div className="grid-container">
        <div className="box education-box">
          <div className="box-header">Education</div>
          <div className="box-content-container">
            <div className="flex-box-content box-content">
              <h2>Indiana University Bloomington</h2>
              <span>
                Bachelor of Science
                <br /> Finance Major
                <br /> Computer Science Minor
              </span>
            </div>
            <div className="flex-box-content box-content">
              <h2>Fullstack Academy</h2>
              <span>Computer Software Engineering Certificate</span>
            </div>
          </div>
        </div>
        <div className="box language-box">
          <div className="box-header">Language</div>
          <div className="box-content">
            <span>Typescript</span>
            <span>Rust</span>
          </div>
        </div>
        <div className="box framework-box">
          <div className="box-header">Framework</div>
          <div className="box-content">
            <span>React</span>
            <span>Svelte</span>
            <br />
          </div>
        </div>
        <div className="box library-box">
          <div className="box-header">Library</div>
          <div className="box-content">
            <span>HTMX</span>
            <span>Redux</span>
            <span>Tailwind</span>
            <span>Redux</span>
            <span>Express.js</span>
          </div>
        </div>
        <div className="box tools-box">
          <div className="box-header">Tools</div>
          <div className="box-content">
            <span>Webpack</span>
            <span> Node.js</span>
            <span>Git</span>
          </div>
        </div>
        <div className="box experience1-box">
          <div className="box-header">Experience</div>
          <div className="box-content-container">
            <div className="flex-box-content box-content">
              <h2>Zerosync</h2>
              <span>Software engineer</span>
            </div>
            <div className="flex-box-content box-content">
              <h2>Advent International</h2>
              <span>Investment Banking Analyst Intern</span>
            </div>
          </div>
        </div>
        <div className="box project-box">
          <div className="box-header">Projects</div>
          <div className="box-content box-content-links">
            <a href="https://sequirrel.herokuapp.com/" target="_blank">
              <span>Sequirrel</span>
            </a>
            <a href="https://the-board-company.herokuapp.com/" target="_blank">
              <span>The Board Company</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
