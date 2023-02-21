import React, { useContext } from "react";
import "./skills.css";
import Html from "../../img/html5.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import react from "../../img/react.png";
import Bootstrap from "../../img/Bootstrap.png";
import firebase from "../../img/firebase.png";
import redux from "../../img/redux.png";
import tailwind from "../../img/tailwind.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Skills = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="main_container">
        <span style={{ color: darkMode ? "white" : "" }}>Skills</span>

        <div className="skills_container" id="Skills">
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={Html} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Html5</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={Css} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Css</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={Js} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Js</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={react} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>React</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={Bootstrap} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Bootstrap</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={tailwind} id="tailwind" alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Tailwind</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={firebase} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Firebase</span>
          </div>
          <div className="skills">
            <motion.div
              initial={{ top: "-70%" }}
              whileInView={{ top: "3rem" }}
              transition={transition}
              className="circle"
            >
              <img src={redux} alt="logo" />
            </motion.div>
            <span style={{ color: darkMode ? "white" : "" }}>Redux</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
