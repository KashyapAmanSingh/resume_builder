import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FcAbout,FcDocument,FcDownload,FcEditImage,FcHome,FcInspection,FcProcess,FcKindle} from "react-icons/fc";
import { GiWizardFace } from "react-icons/gi";
const Navb = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
              <Container>
                <Navbar.Brand href="#Home"> <GiWizardFace/>Team wizard </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> 
                  <Nav className="me-auto ">
                    <Nav.Link href="Home"> <FcHome/>Home</Nav.Link>   </Nav>
                    <Nav className=" text-right ">
                    <Nav.Link href="GetResume"> <FcDocument/> GetResume  </Nav.Link>
                    <Nav.Link href="About"> <FcAbout /> About us </Nav.Link>
                    <Nav.Link href="ChooseTemplate" className="text-info"> <FcEditImage/> ChooseTemplate  </Nav.Link> 
            <Nav.Link href="Details"  className="text-info"> <FcInspection/> fill  Details  </Nav.Link>
            <Nav.Link href="Preview"  className="text-info"> <FcProcess/>Preview</Nav.Link>
            <Nav.Link href="Download"  className="text-info"> <FcDownload/> Download  </Nav.Link>
            <Nav.Link href="Form"  className="text-info"> <FcKindle/>  Form  </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>    
            </Navbar>
           </>
    )
}

export default Navb

