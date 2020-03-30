import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';


export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">A</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#portifolio">Portifolio</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contactme">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
