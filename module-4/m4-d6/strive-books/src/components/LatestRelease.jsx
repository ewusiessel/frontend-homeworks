import { Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";


const selectedBook = [...fantasy.slice(-12)]


const BookImages = () => (
  <Container className="">
    <h5 className="mt-3">Latest Release</h5>

    <Row className="mb-5">
      {selectedBook.map((book) => (
        <Col sm={12} md={3}>
          <Card className="mt-2" style={{ width: "12rem" }} key={book.asin}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title style={{ fontSize: "0.8rem" }}>
                {book.title}
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookImages
