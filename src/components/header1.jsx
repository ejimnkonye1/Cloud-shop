import React from "react";
import '../css/header1.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Navbar, Nav, Container } from 'react-bootstrap';

export const HeaderOne = () => {
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="logo">HILZELLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-css">
            <Nav.Link href="#" className="nav-link activ">Home</Nav.Link>
            <Nav.Link href="#" className="nav-link">About</Nav.Link>
            <Nav.Link href="#" className="nav-link">Blog</Nav.Link>
            <Nav.Link href="#" className="nav-link">Shop</Nav.Link>
            <Nav.Link href="#" className="nav-link">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}