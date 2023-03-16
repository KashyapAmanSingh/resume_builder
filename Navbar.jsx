import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navb = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
              <Container>
                <Navbar.Brand href="#Home">Team wizard </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> 
                  <Nav className="me-auto ">
                    <Nav.Link href="Home">Home</Nav.Link>   </Nav>
                    <Nav className=" text-right ">
                    <Nav.Link href="GetResume">  GetResume  </Nav.Link>
                    <Nav.Link href="About"> About us </Nav.Link>
                    <Nav.Link href="ChooseTemplate" className="text-info">  ChooseTemplate  </Nav.Link> 
            <Nav.Link href="Details"  className="text-info"> fill  Details  </Nav.Link>
            <Nav.Link href="Preview"  className="text-info"> Preview</Nav.Link>
            <Nav.Link href="Download"  className="text-info"> Download  </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
           </>
    )
}

export default Navb

