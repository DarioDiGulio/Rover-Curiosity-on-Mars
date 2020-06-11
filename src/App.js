import React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import SliderStep from "./components/SliderStep";
import "./styles/index.scss";
import curiosity from "./images/curiosity.jpg";
import mars from "./images/mars.jpeg";
import mars1 from "./images/mars1.jpg";
import mars2 from "./images/mars2.jpg";
import mars3 from "./images/mars3.jpg";
import mars4 from "./images/mars4.jpg";

function App() {
  return (
    <Layout
      title="Images taken by the Rover Curiosity on Mars"
      footer="Dario Di Gulio - Technisys exercise"
    >
      <Slider>
        <SliderStep photo={curiosity} />
        <SliderStep photo={mars} />
        <SliderStep photo={mars1} />
        <SliderStep photo={mars2} />
        <SliderStep photo={mars3} />
        <SliderStep photo={mars4} />
      </Slider>
    </Layout>
  );
}

export default App;
