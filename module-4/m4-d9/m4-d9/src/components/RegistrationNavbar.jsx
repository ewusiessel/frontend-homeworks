import {Container, Nav, Navbar} from "react-bootstrap";
import * as PropTypes from "prop-types"; //todo: `find out what this is


const RegistrationNavbar = () => {

    return (
        <Container fluid className="p-0">
            <Navbar bg="dark" variant="light">

                <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
                <Nav className="ml-auto" style={{fontSize: "1.5rem"}}>
                    <Nav.Link href="#registration" >Registration</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
};



export default RegistrationNavbar;

