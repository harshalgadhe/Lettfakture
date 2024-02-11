import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import britishFlag from '/image/GB.png';
import brandImage from '/image/diamond.png';

function AppNavbar() {
  return (
    <Navbar expand="xl" >
      <Container fluid className="mt-3 w-75 w-xl-auto">
        <Navbar.Brand href="#home" className="d-none d-xl-block">
          <img src={brandImage} height="32" alt="brand logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav className='gap-3'>
            <Nav.Link className="text-white fw-medium" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white fw-medium" href="#order">Order</Nav.Link>
            <Nav.Link className="text-white fw-medium" href="#customers">Our Customers</Nav.Link>
            <Nav.Link className="text-white fw-medium" href="#about">About Us</Nav.Link>
            <Nav.Link className="text-white fw-medium" href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='d-flex flex-row'>
            <Navbar.Text className="text-white fw-medium">English</Navbar.Text>
            <Container className="ms-2" style={{ padding: "8px" }}>
              <Image src={britishFlag} width="26" height="18" alt="british flag" />
            </Container>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
