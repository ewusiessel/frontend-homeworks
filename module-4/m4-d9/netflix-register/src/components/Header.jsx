import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";

class Header extends React.Component {
  state = {
    query: "",
  };

  // FetchMovies = async () => {
  //   try {
  //     let response = await fetch(
  //       `http://www.omdbapi.com/?s=${this.state.query}&apikey=50074d74`
  //     );

  //     if (response.ok) {
  //       let data = await response.json();
  //       this.setState({ searchResult: data });
  //     }
  //   } catch (error) {}
  // };

  // handleChange = (e) => {
  //   this.setState({ query: e.target.value })
  // }

  render() {
    return (
      <>
        <Navbar id="navbar" bg="dark" expand="sm">
          <Image id="logo" src="./assets/images/netflixlogo.png"></Image>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link id="navLink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link id="navLink" href="#link">
                Backoffice
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.props.query}
                onChange={this.props.handleChange}
              />
              <Button
                variant="outline-light"
                onClick={() => this.FetchMovies()}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
