import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../index.css';

const PillNavb = () => {
  return (
 <Navbar bg="light"  className="navbar-left">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto d-flex flex-column text-center ">
            <Nav.Link href="ChooseTemplate" className="text-info">  ChooseTemplate  </Nav.Link> 
            <Nav.Link href="Details"  className="text-info"> fill  Details  </Nav.Link>
            <Nav.Link href="Preview"  className="text-info"> Preview</Nav.Link>
            <Nav.Link href="Download"  className="text-info"> Download  </Nav.Link>
          </Nav>
</Navbar.Collapse>
</Navbar>
  );
};

export default PillNavb;
