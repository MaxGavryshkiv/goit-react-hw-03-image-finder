import React, { Component } from "react";
import "../styles/Searchbar.scss";

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;