import { Navbar, Nav } from "react-bootstrap";

const MyCustomNavbar = (props) => (
  <Navbar
    className="fixed-top"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Collapse className="ml-auto">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Browse">Browse</Nav.Link>
      </Navbar.Collapse>
    </Navbar.Collapse>
  </Navbar>
);

export default MyCustomNavbar;
