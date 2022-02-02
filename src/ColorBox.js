import { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  static defaultProps = {
    color: "black",
  };

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default ColorBox;
