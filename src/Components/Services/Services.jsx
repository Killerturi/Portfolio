import React, { useContext } from "react";
import Card from "../Card/Card";
import "./services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humbel from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import CV from "./cv.pdf";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="services_container" id="Services">
        <div className="services_left">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            <br />
            similique illo ullam architecto impedit maxime. Ipsa vitae harum
          </span>
          <a href={CV} target="_blank">
            <button className="button services_btn">Download CV</button>
          </a>
          <div
            className="blur services_blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="services_right">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card emoji={HeartEmoji} heading={"Design"} details={"lorem"} />
          </motion.div>
          <motion.div
            initial={{ left: "-20rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={Glasses}
              heading={"Frontend"}
              details={"Html,Css,JavaScript,React"}
            />
          </motion.div>
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={Humbel}
              heading={"Backend"}
              details={"Nodejs,Express,MongoDb"}
            />
          </motion.div>
          <div
            className="blur services_blur2"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
