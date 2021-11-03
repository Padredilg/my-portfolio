import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = (props) => {
    return (

        <header>
            <a href="#Home" className="navlinks">Home</a>
            <p>|</p>
            <a href="#About" className="navlinks">About</a>
            <p>|</p>
            <a href="#Creations" className="navlinks">Creations</a>
            <p>|</p>
            <a href="#Contact" className="navlinks">Contact</a>
        </header>

        
    )
}

export default Navigation