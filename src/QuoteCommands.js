import React, { Component } from "react";
import Button from "./Button.js";

class QuoteCommands extends Component {
  render() {
    return (
      <div className="quote-commands">
        <h2>Robot commands</h2>
        <div className="quote-commands-wrapper">
          <Button
            text="Read this Quote"
            size="bg"
            handleClick={this.props.readQuote}
          />
          <Button
            text="Show past quotes"
            size="bg"
            handleClick={this.props.showPastQuotes}
          />
        </div>
      </div>
    );
  }
}

export default QuoteCommands;
