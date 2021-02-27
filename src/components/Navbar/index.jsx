import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './style.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' className='NavBar sticky-top'>
        {/* <Navbar.Brand href="#home" className="ml-3 NavBar__Brand">A</Navbar.Brand> */}
        <Link
          className='ml-3 NavBar__Brand'
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          A
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link
              className='NavBar__Links'
              activeClass='active'
              to='courses'
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              Courses
            </Link>

            {/* <Link
                className="NavBar__Links"
                activeClass="active"
                to="portifolio"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {1000}
            >Portifolio</Link> */}

            <Link
              className='NavBar__Links'
              activeClass='active'
              to='faq'
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              FAQ
            </Link>

            <Link
              className='NavBar__Links'
              activeClass='active'
              to='contactme'
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              Contact me
            </Link>
            {/* </Nav.Link> */}

            {/* <Nav.Link className="NavBar__Links" href="#portifolio">Portifolio</Nav.Link>
            <Nav.Link className="NavBar__Links" href="#faq">FAQ</Nav.Link>
            <Nav.Link className="NavBar__Links" href="#contactme">Contact me</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
