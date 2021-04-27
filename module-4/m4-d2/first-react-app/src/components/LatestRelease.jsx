import { Card, Button } from "react-bootstrap";
import books from "../data/romance.json"




const BookImages = () => (

  <Card style={{ width: "12rem" }}>
    <Card.Img variant="top" src={books[0].img} />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text></Card.Text>
      <Button variant="danger">Button</Button>
    </Card.Body>
  </Card>
);

export default BookImages