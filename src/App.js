import React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import Image from "./components/Image";
import "./styles/index.scss";
import curiosity from "./images/curiosity.jpg";
import mars from "./images/mars.jpeg";
import mars1 from "./images/mars1.jpg";
import mars2 from "./images/mars2.jpg";
import mars3 from "./images/mars3.jpg";
import mars4 from "./images/mars4.jpg";
import Alerter from "./components/Alerter";

function App() {
  return (
    <Layout
      title="Images taken by the Rover Curiosity on Mars"
      footer="Dario Di Gulio"
    >
      <Slider>
        <Image photo={curiosity} />
        <Image photo={mars} />
        <Image photo={mars1} />
        <Image photo={mars2} />
        <Image photo={mars3} />
        <Image photo={mars4} />
        <Alerter />
      </Slider>
    </Layout>
  );
}

export default App;
