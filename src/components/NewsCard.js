import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";

const newsCardContainer = {
  boxSizing: "borderBox",
  height: "650px",
  flex: "1 40%",
  margin: "1rem",
};

const newsCard = {
  height: "100%",
};

const cardImageContainer = {
  height: "50%",
};

const cardImage = {
  height: "100%",
};

const cardDesciption = {
  height: "50%",
};

const cardAction = {
  height: "50%",
};

const cardButton = {
  marginTop: "10%",
};

export default function NewsCard({ article }) {
  return (
    <div style={newsCardContainer}>
      <Card style={newsCard}>
        <div style={cardImageContainer}>
          <Card.Img
            variant="top"
            src={article.urlToImage}
            alt="No Image"
            style={cardImage}
          />
        </div>
        <Card.Body>
          <div style={cardDesciption}>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.description !== null
                ? `${article.description.slice(0, 150)}....`
                : article.description}
            </Card.Text>
          </div>
          <div style={cardAction}>
            <a href={article.url}>
              <Button variant="primary" style={cardButton}>
                Read More
              </Button>
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
