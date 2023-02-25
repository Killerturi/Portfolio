import React, { useContext } from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import MyPic from "../../img/mypic.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="Intro_container" id="Intro">
        <div className="intro_left">
          <div className="intro_name">
            <span style={{ color: darkMode ? "white" : "" }}>Hi, I Am</span>
            <span>Ajoy Turi</span>
            <span>
              Innovative front end developer . Proficient in HTML,CSS
              ,Javascript using a modern library such as React.Love bringing
              designs to life and create beautiful,usable,expreiences for all
              users.I have good interpersonal skills to build good working
              relatioships.
            </span>
          </div>
          <button className="button intro_btn">
            <Link to="Contact" spy={true} smooth={true}>
              Hire me
            </Link>
          </button>
          <div className="intro_icons">
            <a href="https://github.com/Killerturi" target="_blank">
              <img src={Github} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/ajoy-turi/" target="_blank">
              <img src={Linkedin} alt="linkedin logo" />
            </a>
            <img src={Instagram} alt="instagram_logo" />
          </div>
        </div>
        <div className="intro_right">
          <img src={Vector1} alt="vector1" />
          <img src={Vector2} alt="vector2" />
          <img src={MyPic} alt="mypic" />
          <motion.img
            initial={{ left: "-40%" }}
            whileInView={{ left: "-26%" }}
            transition={transition}
            src={Glassesimoji}
            alt="glassemoji"
          />
          <motion.div
            initial={{ top: "-4%", left: "78%" }}
            whileInView={{ left: "67%" }}
            transition={transition}
            style={{ top: "-4%", left: "68%" }}
          >
            <FloatingDiv image={Crown} text1="Web" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ left: "-50%" }}
            whileInView={{ left: "-26%" }}
            transition={transition}
            style={{ top: "18rem", left: "0rem" }}
          >
            <FloatingDiv image={Thumbup} text1="Best Design" />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
