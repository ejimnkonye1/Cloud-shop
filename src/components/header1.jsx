import React from "react";
import '../css/header1.css'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu,  } from "react-icons/gi";
import { Navbar, Nav, Container, FormControl, Form } from 'react-bootstrap';

export const HeaderOne = () => {
    return(
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none">
      <GiHamburgerMenu />
    </Navbar.Toggle>
    <Navbar.Brand href="#" className="logo d-lg-block d-none">HILZELLA</Navbar.Brand>
    <Form className="d-lg-none d-flex justify-content-center">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
    </Form>
    <Nav className="d-lg-none d-flex justify-content-end">
      <Nav.Link href="#" className="nav-link">
      <div className="carticon ">
          <IoCartOutline  className="cartout"/>
          <span className="count">3</span>
          </div>
      </Nav.Link>
    </Nav>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto nav-css d-lg-flex d-none">
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