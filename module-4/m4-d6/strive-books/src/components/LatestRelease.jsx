import { Card, Col, Container, Row, ListGroup, Form } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const selectedBook = [...fantasy.slice(-12)];

const BookImages = () => (
  <Container className="">
    <h5 className="mt-3">Latest Release</h5>

    <Row className="mb-5">
      {selectedBook.map((book) => (
        <Col sm={6} className="mb-5">
          <Row>
            <Card className="mt-2" style={{ width: "8rem" }} key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title style={{ fontSize: "0.8rem" }}>
                  {book.title}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <button type="button" class="btn btn-info">
                Add Comment
              </button>
            </ListGroup>
          </Row>
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookImages;
