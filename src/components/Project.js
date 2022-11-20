import React from "react";
import sequirrel1 from "../../public/img/sequirrel1.png";
import sequirrel2 from "../../public/img/sequirrel2.png";
import sequirrel3 from "../../public/img/sequirrel3.png";
import board1 from "../../public/img/board1.png";
import board2 from "../../public/img/board2.png";
import board3 from "../../public/img/board3.png";
import board4 from "../../public/img/board4.png";

function Project() {
  return (
    <div id="project-page">
      <div className="project full-page-scroll" id="sequirrel">
        <div className="project-showoff">
          <div className="img-container sequirrel-img">
            <img src={sequirrel1} />
          </div>
          <div className="project-showoff-text" id="sequirrel-text-1">
            - Sequirrel is a tool that allows developers to map out database
            relationships, and define models.
          </div>
        </div>
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
        <div className="project-showoff">
          <div className="img-container sequirrel-img">
            <img src={sequirrel2} />
            <img src={sequirrel3} />
          </div>
          <div className="project-showoff-text" id="sequirrel-text-1">
            - Generate sequelize database code based on the models, and
            relationships on the user's map.
          </div>
        </div>
      </div>

      {/* Board Company */}
      <div className="project full-page-scroll" id="board-company">
        <div className="project-showoff">
          <div className="img-container board-img">
            <img src={board1} />
            <img src={board3} />
          </div>
          <div className="project-showoff-text" id="sequirrel-text-1">
            - The Boarding Company is an e-commerce website for selling board
            games.
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
        <div className="project-showoff">
          <div className="img-container board-img">
            <img src={board2} />
            <img src={board4} />
          </div>
          <div className="project-showoff-text" id="sequirrel-text-1">
            - Utilized JWT for secure user login, and admin login for updating,
            adding, and deleting products.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
