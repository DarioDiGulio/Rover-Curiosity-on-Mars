import React from "react";
import NexsStep from "./NexStep";
import SliderStep from "./SliderStep";
import Loader from "./Loader";
import curiosity from "../images/curiosity.jpg";
import mars1 from "../images/mars1.jpg";
import mars2 from "../images/mars2.jpg";
import mars3 from "../images/mars3.jpg";
// import axios from "axios";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [curiosity, mars1, mars2, mars3],
      loading: false,
      index: 2,
    };
  }

  nextStep = () => {
    if (this.index < this.photos.lenth) {
      this.index = this.index + 1;
    } else {
      this.index = 0;
    }
  };

  prevStep = () => {
    if (this.state.index !== 0) {
      this.index = this.index - 1;
    } else {
      this.index = this.photos.lenth;
    }
  };

  // componentWillMount() {
  //   this.fetchPhotos();
  // }

  // fetchPhotos() {
  //   const apiUrl =
  //     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";
  //   axios.get(apiUrl).then((response) => {
  //     this.setState({
  //       photos: response.data,
  //       loading: false,
  //     });
  //   });
  // }

  render() {
    return (
      <div id="slider">
        <NexsStep direction="left" onClick={this.nextStep} />
        {(this.state.loading && <Loader />) || (
          <SliderStep
            photo={this.state.photos[this.state.index]}
          />
        )}
        <NexsStep direction="right" onClick={this.prevStep} />
      </div>
    );
  }
}

export default Slider;
