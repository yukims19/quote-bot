import React, { Component } from "react";
import Button from "./Button.js";

class QuoteEval extends Component {
  render() {
    return (
      <div className="quote-eval">
        <Button
          color="#e23131"
          text="Lame"
          handleClick={() => this.props.updateEval("lame")}
        />
        <Button
          color="#eac607"
          text="Meh..."
          handleClick={() => this.props.updateEval("meh")}
        />
        <Button
          color="#398e39"
          text="Great!"
          handleClick={() => this.props.updateEval("great")}
        />
      </div>
    );
  }
}

export default QuoteEval;
