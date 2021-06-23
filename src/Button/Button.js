import React, { Component } from "react";

import "../styles/Button.scss";

class Button extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <button type="button" onClick={this.props.onClick} className="Button">
        Load More
      </button>
    );
  }
}

export default Button;
