import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        // <Navbar expand={false} className="sandwich">
        //     <Container fluid>
        //         <Navbar.Brand href="#"></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="offcanvasNavbar" />
        //         <Navbar.Offcanvas
        //             id="offcanvasNavbar"
        //             aria-labelledby="offcanvasNavbarLabel"
        //             placement="end"
        //         >
        //             <Offcanvas.Header closeButton>
        //                 <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
        //             </Offcanvas.Header>
        //             <Offcanvas.Body>
        //                 <Nav className="links-bar">
        //                     <Nav.Link href="#About" className="navigation-link">About</Nav.Link>
        //                     <Nav.Link href="#Creations" className="navigation-link">Creations</Nav.Link>
        //                     <Nav.Link href="#Contact" className="navigation-link">Contact</Nav.Link>
                            
        //                 </Nav>
        //             </Offcanvas.Body>
        //         </Navbar.Offcanvas>
        //     </Container>
        // </Navbar>

        <header>
            <a href="#About" className="navlinks">About</a>
            <p>|</p>
            <a href="#Creations" className="navlinks">Creations</a>
            <p>|</p>
            <a href="#Contact" className="navlinks">Contact</a>
        </header>
    )
}

export default Navigation