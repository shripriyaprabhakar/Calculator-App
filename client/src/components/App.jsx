import React, { Component } from "react";
import "./numbers.css";
import NumbersAll from "./NumbersAll.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTotal: 0,
      buffer: "0",
      previousOperator: null
    };
  }

  buttonClick = value => {
    console.log(value);
    if (isNaN(parseInt(value))) {
      this.handleSymbol(value);
    } else {
      this.handleNumber(value);
    }
  };

  handleNumber = value => {
    if (this.state.buffer === "0") {
      this.setState({ buffer: value });
    } else {
      let num = this.state.buffer;
      num += value;
      this.setState({ buffer: num });
    }
  };

  handleSymbol = value => {
    switch (value) {
      case "C":
        this.setState({ buffer: "0" });
        this.setState({ runningTotal: 0 });
        this.setState({ previousOperator: null });
        break;
      case "=":
        if (this.state.previousOperator === null) {
          return;
        }
        this.flushOperation(parseInt(this.state.buffer));
        this.setState({ previousOperator: null });
        let changeBuffer = "" + this.state.runningTotal;
        this.setState({ buffer: changeBuffer });
        this.setState({ runningTotal: 0 });
        break;
      case "←":
        if (this.state.buffer.length === 1) {
          this.setState({ buffer: "0" });
        } else {
          var modBuffer = this.state.buffer.substring(0, buffer.length - 1);
          this.setState({ buffer: modBuffer });
        }
        break;
      default:
        this.handleMath(value);
        break;
    }
  };

  handleMath = value => {
    const intBuffer = parseInt(this.state.buffer);
    console.log("here", intBuffer);
    if (this.state.runningTotal === 0) {
      this.setState({ runningTotal: intBuffer });
      console.log("rt", this.state.runningTotal);
    } else {
      this.flushOperation(intBuffer);
      console.log("intb", this.flushOperation(intBuffer));
    }
    this.setState({ previousOperator: value });

    this.setState({ buffer: "0" });
  };

  flushOperation = intBuffer => {
    if (this.state.previousOperator === "+") {
      let addRunning = this.state.runningTotal;
      addRunning += intBuffer;
      this.setState({ runningTotal: addRunning });
    } else if (this.state.previousOperator === "-") {
      let subRunning = this.state.runningTotal;
      subRunning -= intBuffer;
      this.setState({ runningTotal: subRunning });
    } else if (this.state.previousOperator === "×") {
      let multRunning = this.state.runningTotal;
      multRunning *= intBuffer;
      this.setState({ runningTotal: multRunning });
    } else {
      let divRunning = this.state.runningTotal;
      divRunning /= intBuffer;
      this.setState({ runningTotal: divRunning });
    }
  };

  render() {
    return (
      <div className="calc">
        <section className="screen">{this.state.buffer}</section>
        <NumbersAll onValueClick={this.buttonClick} />
      </div>
    );
  }
}
