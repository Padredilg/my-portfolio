import React, { useState } from 'react';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Creations from './components/Creations';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
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
