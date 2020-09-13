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
  componentDidMount = () => {
    axios({
      method: "GET",
      url:
        "http://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=15dc83448e474572a8b002056492d4c7",
    }).then(({ data }) => {
      this.setState({
        ...this.state,
        newsArticles: this.state.newsArticles.concat(data.articles),
      });
    });
  };
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResults newsArticles={this.state.newsArticles} />
      </div>
    );
  }
}

export default App;
