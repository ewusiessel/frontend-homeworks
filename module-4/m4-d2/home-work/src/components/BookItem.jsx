import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
export default function BookItem(props) {
  /**
     * 
     * {
    "asin": "0316438960",
    "title": "The Last Wish: Introducing the Witcher",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    "price": 9.59,
    "category": "fantasy"
  },
     */
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.book.img}
        style={{ height: 450, objectFit: "cover" }}
      />
      <Card.Body>
        <Badge variant="danger">{props.book.category}</Badge>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{`${props.book.price} €`}</Card.Text>
        <Button block variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
