import React from "react";
import Layout from "./components/Layout";
import Slider from "./components/Slider";
import "./styles/index.scss";

function App() {
  return (
    <Layout
      title="
    Images taken by the Rover Curiosity on Mars"
      footer="Dario Di Gulio - Technisys exercise"
    >
      <Slider />
    </Layout>
  );
}

export default App;
