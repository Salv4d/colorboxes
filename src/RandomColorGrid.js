import { Component } from "react";
import ColorBox from "./ColorBox";
import "./RandomColorGrid.css";

class RandomColorGrid extends Component {
  static defaultProps = {
    colorList: [
      "black",
      "silver",
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
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      boxList: Array.from({ length: 12 }),
    };
  }

  render() {
    return (
      <div className="RandomColorGrid">
        <ColorBox color={this.props.colorList[5]} />
      </div>
    );
  }
}

export default RandomColorGrid;
