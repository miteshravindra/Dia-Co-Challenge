import React from "react";
import NewsCard from "./NewsCard";

export default function SearchResults({ newsArticles }) {
  return (
    <>
      {newsArticles.map((article, index) => (
        <NewsCard article={article} key={index} />
      ))}
    </>
  );
}
