import { Component } from "react";
import ColorBox from "./ColorBox";
import "./RandomColorGrid.css";

class RandomColorGrid extends Component {
  render() {
    return (
      <div className="RandomColorGrid">
        <ColorBox />
      </div>
    );
  }
}

export default RandomColorGrid;
