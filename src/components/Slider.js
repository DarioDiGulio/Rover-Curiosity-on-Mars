import React, { Component } from "react";
import IconStep from "./IconStep";

class Slider extends Component {
  state = {
    index: 0,
    children: this.props.children,
  };

  nextStep = () => {
    if (this.state.index < this.state.children.length - 1) {
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
        index: this.state.children.length - 1,
      });
    }
  };

  render() {
    return (
      <div id="slider">
        <button onClick={this.prevStep}>
          <IconStep direction="left" />
        </button>
        {this.state.children.map((sliderStep, key) => {
          return key === this.state.index && sliderStep;
        })}
        <button onClick={this.nextStep}>
          <IconStep direction="right" />
        </button>
      </div>
    );
  }
}

export default Slider;
