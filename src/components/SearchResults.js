import React from "react";
import NewsCard from "./NewsCard";

export default function SearchResults({ newsArticles }) {
  console.log(newsArticles);
  return (
    <>
      {newsArticles.map((article) => (
        <NewsCard article={article} />
      ))}
    </>
  );
}
