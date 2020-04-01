import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar  expand="lg" className="NavBar sticky-top">
        <Navbar.Brand href="#home" className="ml-3 NavBar__Brand">A</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="NavBar__Links" href="#courses">Courses</Nav.Link>
            <Nav.Link className="NavBar__Links" href="#portifolio">Portifolio</Nav.Link>
            <Nav.Link className="NavBar__Links" href="#faq">FAQ</Nav.Link>
            <Nav.Link className="NavBar__Links" href="#contactme">Contact me</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
