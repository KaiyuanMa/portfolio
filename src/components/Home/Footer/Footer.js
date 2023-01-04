import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-section full-page-scroll">
      <div id="logo-cite">
        Logo by{" "}
        <a href="https://www.imadethings.com/" target="_blank">
          Charlotte L
        </a>
      </div>
      <div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/kaiyuanma/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/KaiyuanMa" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
