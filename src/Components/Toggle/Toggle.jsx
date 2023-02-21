import React, { useContext } from "react";
import "./toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const btnHandle = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <>
      <div className="toggle_container" onClick={btnHandle}>
        <Moon />
        <Sun />
        <div
          className="toggle_btn"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
      </div>
    </>
  );
};

export default Toggle;
