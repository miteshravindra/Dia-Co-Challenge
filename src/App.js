import React from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spinner from "react-bootstrap/Spinner";

class App extends React.Component {
  state = {
    newsArticles: [],
    articleFilter: "",
    loading: false,
  };

  onSubmitHandler = (event) => {
    if (event.target[0].value.length > 0) {
      this.setState({ ...this.state, loading: true });
      axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${event.target[0].value}&apiKey=15dc83448e474572a8b002056492d4c7`,
      }).then(({ data }) => {
        this.setState({
          ...this.state,
          loading: false,
          newsArticles: [...data.articles],
        });
      });
    }
  };

  onChangeHandler = (event) => {
    console.dir(event.target);
    if (
      event.target.value !== "Sort Articles" &&
      event.target.tagName === "SELECT" &&
      event.target.previousElementSibling.value.length > 0
    ) {
      this.setState({ ...this.state, loading: true });
      axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${event.target.previousElementSibling.value}&sortBy=${event.target.value}&apiKey=15dc83448e474572a8b002056492d4c7`,
      }).then(({ data }) => {
        this.setState({
          ...this.state,
          loading: false,
          newsArticles: [...data.articles],
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandler={this.onChangeHandler}
        />
        {this.state.loading ? (
          <div className="spinnerContainer">
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          <SearchResults newsArticles={this.state.newsArticles} />
        )}
      </div>
    );
  }
}

export default App;
