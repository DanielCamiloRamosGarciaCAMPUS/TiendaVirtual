// Barra de Navegacion
// NavigationBar.jsx

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand href="#home" className=''>Tu Tienda Virtual</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#ropa">Ropa</Nav.Link>
          <Nav.Link href="#zapatos">Zapatos</Nav.Link>
          <Nav.Link href="#mujer">Mujer</Nav.Link>
          <Nav.Link href="#hombre">Hombre</Nav.Link>
        </Nav>
        <Form inline>
          <div className="d-flex align-items-center"> 
            <FormControl type="text" placeholder="Buscar productos..." className="mr-sm-2" />
            <Button variant="outline-info">
              <FaSearch />
            </Button>
          </div>
        </Form>
        <Nav className="ml-auto">
          <Button variant="link" className="text-light">
            <FaUser size={24} />
          </Button>
          <Button variant="link" className="text-light">
            <FaShoppingCart size={24} />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;