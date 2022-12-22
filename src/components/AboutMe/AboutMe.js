import React, { useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

function AboutMe() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="about-page">
          <div className="grid-container">
            <div className="box education-box">
              <div className="box-header">Education</div>
              <div className="box-content-container">
                <div className="flex-box-content">
                  <h2>Indiana University Bloomington</h2>
                  <span>
                    Bachelor of Science
                    <br /> Finance Major
                    <br /> Computer Science Minor
                  </span>
                </div>
                <div className="flex-box-content">
                  <h2>Fullstack Academy</h2>
                  <span>Computer Software Engineering Certificate</span>
                </div>
              </div>
            </div>
            <div className="box language-box">
              <div className="box-header">Language</div>
              <div className="box-content">
                <span>JavaScript</span>
                <span>Java</span>
              </div>
            </div>
            <div className="box library-box">
              <div className="box-header">Library</div>
              <div className="box-content">
                <span>React</span>
                <span>Redux</span>
                <span>Sequelize</span>
                <span>React Flow</span>
              </div>
            </div>
            <div className="box framework-box">
              <div className="box-header">Framework</div>
              <div className="box-content">
                <span>Express.js</span>
                <br />
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
                <div className="flex-box-content">
                  <h2>Allied Millennial Partners</h2>
                  <span>Investment Banking Analyst Intern</span>
                </div>
                <div className="flex-box-content">
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
                <a
                  href="https://the-board-company.herokuapp.com/"
                  target="_blank"
                >
                  <span>The Board Company</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
