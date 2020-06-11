import React from "react";

class SliderStep extends React.Component {
  render() {
    return <img className="content-img" src={this.props.photo} alt=""/>;
  }
}

export default SliderStep;
