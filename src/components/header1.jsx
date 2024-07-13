import React from "react";
import '../css/header1.css'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu,  } from "react-icons/gi";
import { Navbar, Nav, Container, FormControl, Form,InputGroup,Button } from 'react-bootstrap';

import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
export const HeaderOne = ({cartItem}) => {
  const cartItemcount = cartItem.length
    return(
      <Navbar bg=" sm-light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none">
      <GiHamburgerMenu />
    </Navbar.Toggle>
    <Navbar.Brand href="#" className="logo d-lg-block d-none">
  <div className="logo-container">
    <img src={logo} alt="Hilzella Logo" width="50" height="50" />
    <span className="logo-text">HILZELLA</span>
  </div>
</Navbar.Brand>
<Form className="d-lg-none d-flex justify-content-center">
  <InputGroup>
    <InputGroup.Text>
      <CiSearch />
    </InputGroup.Text>
    <FormControl type="search"
     placeholder="Enter keyword" 
     className="me-2 phone-search" 
    
     aria-label="Search" />
  </InputGroup>
</Form>
    <Nav className="d-lg-none d-flex justify-content-end">
      <Nav.Link   className="nav-link">
      <div className="carticon ">
       <Link to={'/cart'}>
          <IoCartOutline  className="cartout"/>
          <span className="count">{cartItemcount}</span>
       </Link>
          </div>
      </Nav.Link>
    </Nav>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto nav-css d-lg-flex d-none">
        <Nav.Link href="/" className="nav-link activ">Home</Nav.Link>
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