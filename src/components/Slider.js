import React from "react";
import IconStep from "./IconStep";
import SliderStep from "./SliderStep";

class Slider extends React.Component {
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
        {this.state.children.map((photo, key) => {
          return <SliderStep photo={photo} key={this.state.index} />;
        })}
        <button onClick={this.nextStep}>
          <IconStep direction="right" />
        </button>
      </div>
    );
  }
}

export default Slider;
