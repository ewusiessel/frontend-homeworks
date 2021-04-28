import { Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <Container
      fluid
      className="text-center bg-dark text-muted"
      style={{ height: "160px" }}
    >
      <Col>
        <div style={{paddingTop:"50px"}}>Footer Copyright © 2021 </div>
      </Col>
    </Container>
  );
}

export default Footer;