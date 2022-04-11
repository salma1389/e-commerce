import React from 'react'
import './Navbarr.css';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown , Button, Badge } from 'react-bootstrap'
import {  ShoppingCartOutlined } from "@mui/material";

const Navbarr = () => {
  return (
    <div>
        <Navbar className='navb'  expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='nameMenu' href="/">Home</Nav.Link>
        <Nav.Link  className='nameMenu' href="/products">Products</Nav.Link>
        <NavDropdown className='nameMenu' title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Kids</NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Form className="d-flex">
      <Nav.Link className='nameMenu' href="/signUp">SignUp</Nav.Link>
      <Nav.Link className='nameMenu' href="/login">Login</Nav.Link>
      <div className='btnCartCount' >
         
    <div className='count'>0</div>
      
    <i className='fas fa-shopping-cart'></i>
    
 
</div>
      {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarr