import React, { Component } from "react";

class Quote extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card quote">
        {this.props.date ? <p>Date: {this.props.date}</p> : ""}
        {this.props.eval ? (
          <p className={this.props.eval}>
            {" "}
            Rating: <span />
            {this.props.eval}
          </p>
        ) : (
          ""
        )}
        <h3>Quote {this.props.quoteId}</h3>
        {this.props.quoteContent}
        <h4>
          <i>{this.props.quoteTitle}</i>
        </h4>
      </div>
    );
  }
}

export default Quote;
