import React from "react";
import NewsCard from "./NewsCard";

export default function SearchResults({ newsArticles }) {
  console.log(newsArticles);
  return newsArticles.length <= 0 ? (
    "...loading spinner"
  ) : (
    <>
      {newsArticles.map((article) => (
        <NewsCard article={article} />
      ))}
    </>
  );
}
