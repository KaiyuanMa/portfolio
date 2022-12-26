import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import sequirrel1 from "../../../../public/img/sequirrel1.png";
import sequirrel2 from "../../../../public/img/sequirrel2.png";
import sequirrel3 from "../../../../public/img/sequirrel3.png";
import "./styles.css";

function Sequirrel() {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".project-showoff", { yPercent: -150, opacity: 0 });
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: "#sequirrel",
  //     start: "top top",
  //     scrub: true,
  //     pin: true,
  //   });
  // }, []);
  return (
    <div className="project full-page-scroll" id="sequirrel">
      {/* <div className="project-showoff">
        <div className="img-container sequirrel-img">
          <img src={sequirrel1} />
        </div>
        <div className="project-showoff-text sequirrel-text">
          Sequirrel is a tool that allows developers to map out database
          relationships, and define models.
        </div>
      </div> */}
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
      {/* <div className="project-showoff">
        <div className="img-container sequirrel-img">
          <img src={sequirrel2} />
          <img src={sequirrel3} />
        </div>
        <div className="project-showoff-text sequirrel-text">
          Generate sequelize database code based on the models, and
          relationships on the user's map.
        </div>
      </div> */}
    </div>
  );
}

export default Sequirrel;
