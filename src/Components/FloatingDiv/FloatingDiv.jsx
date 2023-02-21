import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./floatingDiv.css";
const FloatingDiv = ({ image, text1, text2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="floatingdiv_container">
        <img src={image} alt="crown-image" />
        <span>
          {text1}
          <br />
          {text2}
        </span>
      </div>
    </>
  );
};

export default FloatingDiv;
