import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = (props) => {
    // return (

    //     <header>
    //         <a href="#Home" className="navlinks">Home</a>
    //         <p>|</p>
    //         <a href="#About" className="navlinks">About</a>
    //         <p>|</p>
    //         <a href="#Creations" className="navlinks">Creations</a>
    //         <p>|</p>
    //         <a href="#Contact" className="navlinks">Contact</a>
    //     </header>

        
    // )

    return(
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <a href="#Home" class="logo">Luiz<em> Padredi</em></a>
                            {/* <!-- ***** Logo End ***** --> */}
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul class="nav">
                                <li ><a href="#Home" class="active">Home</a></li>
                                <li ><a href="#About">About</a></li>
                                <li ><a href="#Creations">Creations</a></li>
                                <li class="main-button"><a href="#Contact">Connect</a></li>
                            </ul>        
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation