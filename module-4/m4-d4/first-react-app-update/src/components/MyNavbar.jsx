import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNavbar() {

  return (
    
    <Navbar bg="dark" variant="dark" expand="lg">
     <Navbar.Brand href="#home">Book Store</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ml-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#browse">Browse</Nav.Link>
         <Nav.Link href="#store">Store</Nav.Link>
       </Nav>
     </Navbar.Collapse>
    </Navbar>
    
  )
   
   
}

export default MyNavbar