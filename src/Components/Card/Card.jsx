import React from "react";
import "./card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <>
      <div className="card_conatiner">
        <img src={emoji} alt="emoji" />
        <span>{heading}</span>
        <span>{details}</span>
        <button className="card_button">LEARN MORE</button>
      </div>
    </>
  );
};

export default Card;
