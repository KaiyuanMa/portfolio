import React, { useEffect } from "react";
import board1 from "../../../../public/img/board1.png";
import board2 from "../../../../public/img/board2.png";
import board3 from "../../../../public/img/board3.png";
import board4 from "../../../../public/img/board4.png";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function BoardCompany() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".board-company-project", { opacity: 0 }, { opacity: 1 });
    ScrollTrigger.create({
      animation: tl,
      trigger: "#board-company",
      start: "top top",
      scrub: true,
      pin: true,
    });
  }, []);
  return (
    <div className="project full-page-scroll" id="board-company">
      <div className="board-showoff">
        <div className="project-showoff board-company-project">
          <div className="img-container board-img">
            <img src={board1} />
          </div>
          <div className="project-showoff-text board-text">
            Home page with carousel
          </div>
        </div>
        <div className="project-showoff board-company-project">
          <div className="img-container board-img">
            <img src={board3} />
          </div>
          <div className="project-showoff-text board-text">
            User page with ability to change icon, password, and check past
            orders
          </div>
        </div>
      </div>
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
          <div className="project-tech"></div>
          <div className="project-tech">React Redux</div>
          <div className="project-tech">Express</div>
        </div>
      </div>
      <div className="board-showoff">
        <div className="project-showoff board-company-project">
          <div className="img-container board-img">
            <img src={board2} />
          </div>
          <div className="project-showoff-text board-text">
            Product page with searching function
          </div>
        </div>
        <div className="project-showoff board-company-project">
          <div className="img-container board-img">
            <img src={board4} />
          </div>
          <div className="project-showoff-text board-text">
            Admin page to add, delete and edit products
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardCompany;
