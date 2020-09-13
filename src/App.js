import React from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

class App extends React.Component {
  state = {
    newsArticles: [],
    articleFilter: "",
  };

  onSubmitHandler = (event) => {
    if (event.target[0].value.length > 0) {
      axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${event.target[0].value}&apiKey=15dc83448e474572a8b002056492d4c7`,
      }).then(({ data }) => {
        this.setState({
          ...this.state,
          newsArticles: [...data.articles],
        });
      });
    }
  };

  onChangeHandler = (event) => {
    if (
      event.target.value !== "Sort Articles" &&
      event.target.tagName === "SELECT"
    ) {
      axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${event.target[0].value}&sortBy=${event.target.value}&apiKey=15dc83448e474572a8b002056492d4c7`,
      }).then(({ data }) => {
        this.setState({
          ...this.state,
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
        <SearchResults newsArticles={this.state.newsArticles} />
      </div>
    );
  }
}

export default App;
