import React from "react";
import "../Styles/Card.scss";
import logo from "../assets/ghosts.svg";

const Card = ({image }) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="" />
      <div className="content">
        <img src={logo} alt="" className="logo" />
      </div>
    </div>
  );
};

export default Card;
