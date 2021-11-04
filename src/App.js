import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComp from './components/NavbarComp.js';
import About from './components/About/index.js';

import Home from './components/Home';
import Creations from './components/Creations';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <NavbarComp />
      <main>
        <Home />
        <About />
        <Creations />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
