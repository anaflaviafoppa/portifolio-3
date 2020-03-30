import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './style.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
         <Navbar collapseOnSelect expand="lg"  className="container">

          <Navbar.Brand href="#home" className="ml-3 NavBar__Brand">A</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="mr-3"/>

          <Navbar.Collapse id="responsive-navbar-nav" className="d-md-flex justify-content-md-center" >

            <Nav className="text-center">
              <Nav.Link className="NavBar__Links" href="#courses">Courses</Nav.Link>
              <Nav.Link className="NavBar__Links" href="#portifolio">Portifolio</Nav.Link>
              <Nav.Link className="NavBar__Links" href="#faq">FAQ</Nav.Link>
              <Nav.Link className="NavBar__Links" href="#contactme">Contact me</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
          </Navbar>
      </div>
     
    )
  }
}
