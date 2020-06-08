import React from "react";

class SliderStep extends React.Component {
  state = {
    loading: false,
    error: null,
    photo: {},
  };

  getPhoto(id) {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson.photos[id];
      });
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      photo: this.getPhoto(this.props.id),
    });
  };

  render() {
    return (
      <div>
        <p className="item">Name: </p>
        <p className="item">Mass: </p>
        <p className="item">Length of day:</p>
        <p className="item">Mean temperature: </p>
      </div>
    );
  }
}

export default SliderStep;
