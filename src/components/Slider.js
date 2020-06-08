import React from "react";
import NexsStep from "./NexStep";
import SliderStep from "./SliderStep";

function slider(props) {
  return (
    <div id="slider">
      <NexsStep direction="left" />
      <SliderStep className="sliderStep" step={1}/>
      <NexsStep direction="right" />
    </div>
  );
}

export default slider;
