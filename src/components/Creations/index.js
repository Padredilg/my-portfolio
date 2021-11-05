import React, { useState } from "react";
import Projects from "../Projects";

const Creations= () =>{

    return(
        <section class="section" id="Creations">
            <div class="section-heading">
                <h2 class="reversed-title">Creat<em>ions</em></h2>
                <p>Check out some of the projects I developed</p>
            </div>

            <Projects />

        </section>
    )
}

export default Creations;