import React from "react";
import loader from "../images/loader.svg";

class Loader extends React.Component {
  render() {
    return (
      <div>
        <img src={loader} />
      </div>
    );
  }
}

export default Loader;
