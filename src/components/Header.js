import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="f1">Robo Friends PWA</h1>
        <CounterButton color={"teal"} />
        <CounterButton2 color={"teal"} />
      </div>
    );
  }
}

export default Header;
