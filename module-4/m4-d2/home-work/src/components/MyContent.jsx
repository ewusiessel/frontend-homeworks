import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../data/fantasy.json";
import BookItem from "./BookItem";

const MyCustomContent = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {books.map((book) => (
          <Col key={book.asin} xs={12} md={4}>
            <BookItem book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyCustomContent;
