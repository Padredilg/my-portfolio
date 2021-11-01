import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar expand={false} className="sandwich">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#About" className="navigation-link">About</Nav.Link>
                            <Nav.Link href="#Projects" className="navigation-link">Projects</Nav.Link>
                            <Nav.Link href="#Contact" className="navigation-link">Contact</Nav.Link>
                            
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation