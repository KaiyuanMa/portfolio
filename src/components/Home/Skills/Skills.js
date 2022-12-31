import React, { useEffect } from "react";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: "#skill-page",
      start: "top top",
      pin: true,
      scrub: 0.5,
    });
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
  return (
    <div id="skill-page" className="full-page-scroll">
      <div className="page-title">SKILLS</div>
      <div id="cards">
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-square-js"></i>
            <div className="card-sub">
              <i className="fa-brands fa-square-js"></i>
              <div className="card-subtext-title">JavaScript</div>
              <div className="card-subtext-text">
                I say I am pretty good at it
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-react"></i>
            <div className="card-sub">
              <i className="fa-brands fa-react"></i>
              <div className="card-subtext-title">React</div>
              <div className="card-subtext-text">
                This is my car plate number
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-node-js"></i>
            <div className="card-sub">
              <i className="fa-brands fa-node-js"></i>

              <div className="card-subtext-title">Node.js</div>
              <div className="card-subtext-text">Is it a skill?</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-java"></i>
            <div className="card-sub">
              <i className="fa-brands fa-java"></i>

              <div className="card-subtext-title">Java</div>
              <div className="card-subtext-text">My first love</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-css3-alt"></i>
            <div className="card-sub">
              <i className="fa-brands fa-css3-alt"></i>

              <div className="card-subtext-title">CSS</div>
              <div className="card-subtext-text">I love it</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-html5"></i>
            <div className="card-sub">
              <i className="fa-brands fa-html5"></i>

              <div className="card-subtext-title">HTML</div>
              <div className="card-subtext-text">
                This is another shield I have
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-git"></i>
            <div className="card-sub">
              <i className="fa-brands fa-git"></i>

              <div className="card-subtext-title">Git</div>
              <div className="card-subtext-text">Where I social</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i className="fa-brands fa-python"></i>
            <div className="card-sub">
              <i className="fa-brands fa-python"></i>
              <div className="card-subtext-title">Python</div>
              <div className="card-subtext-text">I don't hate it</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
