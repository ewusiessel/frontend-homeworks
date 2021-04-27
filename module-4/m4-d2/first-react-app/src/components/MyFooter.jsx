import { Navbar, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
      <Navbar className="text-center bg-dark text-muted">
        <Col>Footer Copyright</Col>
      </Navbar>
    );
}

export default Footer;