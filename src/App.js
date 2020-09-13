import React from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Spinner from "react-bootstrap/Spinner";
import API from "../src/constant/api";

class App extends React.Component {
  state = {
    newsArticles: [],
    articleFilter: "",
    loading: false,
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.length > 0) {
      if (event.target[1].value === "Sort Articles") {
        this.setState({ ...this.state, loading: true });
        axios({
          method: "GET",
          url: `${API.url}?q=${event.target[0].value}&apiKey=${API.key}`,
        }).then(({ data }) => {
          this.setState({
            ...this.state,
            loading: false,
            newsArticles: [...data.articles],
          });
        });
      } else {
        this.setState({ ...this.state, loading: true });
        axios({
          method: "GET",
          url: `${API.url}?q=${event.target[0].value}&sortBy=${event.target[1].value}&apiKey=${API.key}`,
        }).then(({ data }) => {
          this.setState({
            ...this.state,
            loading: false,
            newsArticles: [...data.articles],
          });
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmitHandler={this.onSubmitHandler} />
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
