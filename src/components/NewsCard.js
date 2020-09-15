import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import styles from "./NewsCard.module.css";

export default function NewsCard({ article }) {
  return (
    <div className={styles.newsCardContainer}>
      <Card className={styles.newsCard}>
        <div className={styles.cardImageContainer}>
          <a href={article.url} target="_blank">
            <Card.Img
              variant="top"
              src={article.urlToImage}
              alt="No Image"
              className={styles.cardImage}
            />
          </a>
        </div>
        <Card.Body>
          <div className={styles.cardDesciption}>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text className={styles.cardText}>
              {article.description !== null
                ? `${article.description.slice(0, 150)}....`
                : article.description}
            </Card.Text>
          </div>
          <div className={styles.cardAction}>
            <a href={article.url} target="_blank">
              <Button variant="dark" className={styles.cardButton}>
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
