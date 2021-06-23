import React from "react";
import Loader from "react-loader-spinner";

import pixabayApi from "./servises/pixabay-api";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";

import "./App.scss";

// TODO

class App extends React.Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const option = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    pixabayApi
      .fetchHits(option)
      .then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery obj={hits} />

        <div className="button-container">
          {isLoading && (
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          )}

          {shouldRenderLoadMoreButton && <Button onClick={this.fetchHits} />}
        </div>
      </>
    );
  }
}

export default App;
