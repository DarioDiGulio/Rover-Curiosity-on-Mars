import React from "react";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

export default function NexsStep(props) {
  const direction = props.direction;
  return (
    <img
      className="nextStep"
      src={direction === "left" ? arrowLeft : arrowRight}
      alt="Next Step"
    />
  );
}
