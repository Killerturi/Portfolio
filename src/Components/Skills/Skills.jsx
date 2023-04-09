import React, { useContext } from "react";
import "./skills.css";
import Html from "../../img/html5.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import react from "../../img/react.png";
import Bootstrap from "../../img/Bootstrap.png";
import firebase from "../../img/firebase.png";
import redux from "../../img/redux.png";
import Query from "../../img/Query.png";
import tailwind from "../../img/tailwind.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
const Skills = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const transition = { duration: 2, type: "spring" };
  console.log(dimensions);
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  });

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      {dimensions.width > 480 ? (
        <>
          <div className="main_container" id="Skills">
            <span style={{ color: darkMode ? "white" : "" }}>Skills</span>

            <div className="skills_container">
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
                <span style={{ color: darkMode ? "white" : "" }}>
                  Bootstrap
                </span>
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
              <div className="skills">
                <motion.div
                  initial={{ top: "-70%" }}
                  whileInView={{ top: "3rem" }}
                  transition={transition}
                  className="circle"
                >
                  <img src={Query} alt="logo" />
                </motion.div>
                <span style={{ color: darkMode ? "white" : "" }}>
                  ReactQuery
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main_container">
            <span style={{ color: darkMode ? "white" : "" }}>Skills</span>
            <div className="skills_container" id="Skills">
              <div className="skills">
                <div className="circle">
                  <img src={Html} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>Html5</span>
              </div>
              <div className="skills">
                <di className="circle">
                  <img src={Css} alt="logo" />
                </di>
                <span style={{ color: darkMode ? "white" : "" }}>Css</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={Js} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>Js</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={react} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>React</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={Bootstrap} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>
                  Bootstrap
                </span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={tailwind} id="tailwind" alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>Tailwind</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={firebase} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>Firebase</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={redux} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>Redux</span>
              </div>
              <div className="skills">
                <div className="circle">
                  <img src={Query} alt="logo" />
                </div>
                <span style={{ color: darkMode ? "white" : "" }}>
                  React-Query
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Skills;
