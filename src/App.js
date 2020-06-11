import React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import SliderStep from "./components/SliderStep";
import "./styles/index.scss";
import curiosity from "./images/curiosity.jpg";
import mars1 from "./images/mars1.jpg";
import mars2 from "./images/mars2.jpg";
import mars3 from "./images/mars3.jpg";

function App() {
  return (
    <Layout
      title="Images taken by the Rover Curiosity on Mars"
      footer="Dario Di Gulio - Technisys exercise"
    >
      <Slider>
        <SliderStep photo={curiosity} />
        <SliderStep photo={mars1} />
        <SliderStep photo={mars2} />
        <SliderStep photo={mars3} />
      </Slider>
    </Layout>
  );
}

export default App;
