import React from "react";
import { Card, Button } from "react-bootstrap";

export default function NewsCard({ article }) {
  console.log("article inside card component");
  console.log(article);
  return (
    <div>
      <Card style={{ width: "45%" }}>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
          <a href={article.url}>
            <Button variant="primary">Read More</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
