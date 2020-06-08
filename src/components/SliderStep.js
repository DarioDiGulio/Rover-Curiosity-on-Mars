import React from "react";

class SliderStep extends React.Component {
  state = {
    loading: false,
    error: null,
    photo: {},
  };

  getPhoto(id) {
    let photo;
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        photo = myJson.photos[id];
      });
    return photo;
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
        <img src={this.state.photo.img_src} />
      </div>
    );
  }
}

export default SliderStep;
