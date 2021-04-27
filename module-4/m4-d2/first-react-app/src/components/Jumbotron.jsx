import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function myJumbotron() {
  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <h1>Welcome to Book Store</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default myJumbotron;

