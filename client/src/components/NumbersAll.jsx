import React, { Component } from "react";
import "./numbers.css";

export default class NumbersAll extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    event.preventDefault();
    this.props.onValueClick(event.target.value);
  };

  render() {
    return (
      <div className="calc">
        <section className="calc-buttons">
          <div className="calc-button-row">
            <button
              className="calc-button double "
              value="C"
              onClick={this.handleClick}
            >
              C
            </button>
            <button
              className="calc-button"
              value="←"
              onClick={this.handleClick}
            >
              ←
            </button>
            <button
              className="calc-button"
              value="÷"
              onClick={this.handleClick}
            >
              ÷
            </button>
          </div>
          <div className="calc-button-row">
            <button
              className="calc-button"
              value="7"
              onClick={this.handleClick}
            >
              7
            </button>
            <button
              className="calc-button"
              value="8"
              onClick={this.handleClick}
            >
              8
            </button>
            <button
              className="calc-button"
              value="9"
              onClick={this.handleClick}
            >
              9
            </button>
            <button
              className="calc-button"
              value="×"
              onClick={this.handleClick}
            >
              ×
            </button>
          </div>
          <div className="calc-button-row">
            <button
              className="calc-button"
              value="4"
              onClick={this.handleClick}
            >
              4
            </button>
            <button
              className="calc-button"
              value="5"
              onClick={this.handleClick}
            >
              5
            </button>
            <button
              className="calc-button"
              value="6"
              onClick={this.handleClick}
            >
              6
            </button>
            <button
              className="calc-button"
              value="-"
              onClick={this.handleClick}
            >
              -
            </button>
          </div>
          <div className="calc-button-row">
            <button
              className="calc-button"
              value="1"
              onClick={this.handleClick}
            >
              1
            </button>
            <button
              className="calc-button"
              value="2"
              onClick={this.handleClick}
            >
              2
            </button>
            <button
              className="calc-button"
              value="3"
              onClick={this.handleClick}
            >
              3
            </button>
            <button
              className="calc-button"
              value="+"
              onClick={this.handleClick}
            >
              +
            </button>
          </div>
          <div className="calc-button-row">
            <button
              className="calc-button triple"
              value="0"
              onClick={this.handleClick}
            >
              0
            </button>
            <button
              className="calc-button"
              value="="
              onClick={this.handleClick}
            >
              =
            </button>
          </div>
        </section>
      </div>
    );
  }
}
