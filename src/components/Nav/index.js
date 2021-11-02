import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = (props) => {
    return (

        <header>
            <a href="#Home" onClick={ ()=>{props.setCurrentPage('Home')}} className="navlinks">Home</a>
            <p>|</p>
            <a href="#About" onClick={ ()=>{props.setCurrentPage('About')}} className="navlinks">About</a>
            <p>|</p>
            <a href="#Creations" onClick={ ()=>{props.setCurrentPage('Creations')}} className="navlinks">Creations</a>
            <p>|</p>
            <a href="#Contact" onClick={ ()=>{props.setCurrentPage('Contact')}} className="navlinks">Contact</a>
        </header>

        
    )
}

export default Navigation