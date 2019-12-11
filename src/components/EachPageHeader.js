import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class SectionHeader extends Component {
  render() {
    return (
      <div className="each-page-header">
        <Fade>
          <h1 className="text-center text-white">{this.props.pageNAME}</h1>
        </Fade>
      </div>
    );
  }
}
