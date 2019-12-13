import React, { Component } from "react";

export default class Page404 extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.href = "https://www.airstairsolutions.com";
    }, 5000);
  }
  render() {
    return <div>1</div>;
  }
}
