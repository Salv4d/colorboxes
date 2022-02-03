import { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

class ColorBox extends Component {
  static defaultProps = {
    colorList: [
      "black",
      "silver",
      "gray",
      "white",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "orange",
      "aliceblue",
      "antiquewhite",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "blanchedalmond",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { color: "black" };
    this.pickColor = this.pickColor.bind(this);
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
        onClick={this.pickColor}
      ></div>
    );
  }

  pickColor() {
    this.setState(() => ({ color: choice(this.props.colorList) }));
  }

  componentDidMount() {
    this.pickColor();
  }
}

export default ColorBox;
