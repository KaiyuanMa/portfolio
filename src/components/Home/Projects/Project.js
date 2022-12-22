import React from "react";
import sequirrel1 from "../../../../public/img/sequirrel1.png";
import sequirrel2 from "../../../../public/img/sequirrel2.png";
import sequirrel3 from "../../../../public/img/sequirrel3.png";
import board1 from "../../../../public/img/board1.png";
import board2 from "../../../../public/img/board2.png";
import board3 from "../../../../public/img/board3.png";
import board4 from "../../../../public/img/board4.png";
import "./styles.css";
import Sequirrel from "./Sequirrel";
import BoardCompany from "./BoardCompany";

function Project() {
  return (
    <div id="project-page">
      <Sequirrel />
      <BoardCompany />
    </div>
  );
}

export default Project;
