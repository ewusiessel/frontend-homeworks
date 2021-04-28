import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function myJumbotron() {
    return (
      
    <Jumbotron fluid className="mb-0">
      <Container>
        <h1>Welcome to Book Store</h1>
        <p>
          “Books are the quietest and most constant of friends; they are the
          most accessible and wisest of counselors, and the most patient of
          teachers.” <br /> – <em>Charles W. Eliot</em>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default myJumbotron;

