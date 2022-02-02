import { Component } from "react";
import ColorBox from "./ColorBox";
import "./RandomColorGrid.css";

class RandomColorGrid extends Component {
  static defaultProps = {
    boxNum: 12,
  };

  render() {
    return (
      <div className="RandomColorGrid">
        {[...Array(12).keys()].map((val) => (
          <ColorBox key={val} />
        ))}
      </div>
    );
  }
}

export default RandomColorGrid;
