import React from "react";
import IconStep from "./IconStep";
import SliderStep from "./SliderStep";
import curiosity from "../images/curiosity.jpg";
import mars1 from "../images/mars1.jpg";
import mars2 from "../images/mars2.jpg";
import mars3 from "../images/mars3.jpg";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [curiosity, mars1, mars2, mars3],
      index: 0,
    };
  }

  nextStep = () => {
    if (this.state.index < this.state.photos.length - 1) {
      this.setState({
        ...this.state,
        index: this.state.index + 1,
      });
    } else {
      this.setState({
        ...this.state,
        index: 0,
      });
    }
  };

  prevStep = () => {
    if (this.state.index !== 0) {
      this.setState({
        ...this.state,
        index: this.state.index - 1,
      });
    } else {
      this.setState({
        ...this.state,
        index: this.state.photos.length - 1,
      });
    }
  };

  render() {
    return (
      <div id="slider">
        <button onClick={this.prevStep}>
          <IconStep direction="left" />
        </button>
        <SliderStep photo={this.state.photos[this.state.index]} />
        <button onClick={this.nextStep}>
          <IconStep direction="right" />
        </button>
      </div>
    );
  }
}

export default Slider;
