import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComp from './components/NavbarComp.js';
import About from './components/About/index.js';
import Home from './components/Home';
import Creations from './components/Creations';
import Skills from './components/Skills/index.js';
import Contact from './components/Contact';
import Footer from './components/Footer/index.js';

function App() {
  return (
    <div>
      <NavbarComp />
      <main>
        <Home />
        <About />
        <Creations />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
