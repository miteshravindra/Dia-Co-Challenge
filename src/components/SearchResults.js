import React from "react";
import NewsCard from "./NewsCard";
import "./SearchResults.css";

export default function SearchResults({ newsArticles }) {
  return (
    <div className="searchResultContainer">
      {newsArticles.map((article, index) => (
        <NewsCard article={article} key={index} />
      ))}
    </div>
  );
}
