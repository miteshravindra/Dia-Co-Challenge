import React from "react";
import "./NewsCard.css";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

const newsCardContainer = {
  boxSizing: "borderBox",
  flex: "1 0 40%",
  margin: "1rem",
};

const newsCard = {
  height: "100%",
};

const cardImage = {
  height: "50%",
};

const cardDesciption = {
  height: "50%",
};

const cardAction = {
  display: "flex",
  height: "50%",
  justifyContent: "center",
  alignItems: "center",
};

export default function NewsCard({ article }) {
  return (
    <div style={newsCardContainer}>
      <Card style={newsCard}>
        <Card.Img
          variant="top"
          src={article.urlToImage}
          style={cardImage}
          alt="No Image"
        />
        <Card.Body>
          <div style={cardDesciption}>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
          </div>
          <div style={cardAction}>
            <a href={article.url}>
              <Button variant="primary">Read More</Button>
            </a>
          </div>
        </Card.Body>
        <footer className="blockquote-footer">
          Published on{" "}
          <cite title="Source Title">
            {moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
          </cite>
        </footer>
      </Card>
    </div>
  );
}
