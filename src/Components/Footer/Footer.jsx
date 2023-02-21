import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <img src={Wave} alt="wave" style={{ width: "100%" }} />
        <div className="footer_contaient">
          <span>Ajoy.turi786@gmail.com</span>
          <div className="footer_icons">
            <a href="https://github.com/Killerturi" target="_blank">
              <Github color="black" size="3rem" />
            </a>
            <a href="">
              <Insta color="black" size="3rem" />
            </a>
            <a href="https://www.linkedin.com/in/ajoy-turi/" target="_blank">
              <Linkedin color="black" size="3rem" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
