import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="navbar-style" variant="dark">
                    <Container>
                        <Navbar.Brand href="#Home">
                            <span className="white-span">Luiz</span>
                            <span className="colored-span">Padredi</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#Creations">Creations</Nav.Link>
                                <Nav.Link href="#Skills">Skills</Nav.Link>
                                <Nav.Link href="#Contact" className="connect-link">Connect</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}