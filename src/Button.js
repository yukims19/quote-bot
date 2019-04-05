import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#1890ff",
      size: "sm"
    };
  }
  componentDidMount() {
    let newColor = this.state.color;
    let newSize = this.state.size;
    if (this.props.color) {
      newColor = this.props.color;
    }
    if (this.props.size === "bg" || this.props.size === "sm") {
      newSize = this.props.size;
    }
    this.setState({
      color: newColor,
      size: newSize
    });
  }
  render() {
    return (
      <button
        style={{ backgroundColor: this.state.color }}
        className={"btn " + this.state.size}
        onClick={e => this.props.handleClick()}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
