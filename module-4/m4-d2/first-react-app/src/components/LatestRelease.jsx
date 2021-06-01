import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import books from "../data/romance.json";

const BookImages = () => (
  <Container className="">
    <h5 className="mt-3">Latest Release</h5>

    <Row className="mb-5">
      {books
        .filter((book, i) => i === 0 || i <= 15)
        .map((book) => (
          <Col xs={12} md={3}>
            <Card className="mt-2" style={{ width: "10rem" }} key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title style={{ fontSize: "0.8rem" }}>
                  {book.title}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Button className="w-50" variant="danger">
                <Badge>£{book.price}</Badge>
              </Button>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
);

export default BookImages;
