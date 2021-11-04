import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComp from './components/NavbarComp.js';
import AboutComponent from './components/AboutComponent/index.js';

import Home from './components/Home';
import About from './components/About';
import Creations from './components/Creations';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <NavbarComp />
      <main>
        <Home />
        <AboutComponent />
        <Creations />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
