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
            <i class="fa-brands fa-js"></i>
            <div className="card-sub">
              <i class="fa-brands fa-js"></i>
              <div className="card-subtext-title">Javascript</div>
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
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content">
            <i class="fa-brands fa-rust"></i>
            <div className="card-sub">
              <i class="fa-brands fa-rust"></i>

              <div className="card-subtext-title">Rust</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
