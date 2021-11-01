import React, { useState } from 'react';
import backgroundVideo from './components/BackgroundVideo/FallingStars.mp4';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <video autoPlay loop muted className="bg-vid">
          <source src={backgroundVideo} type="video/mp4" />
      </video>

      <About />
      
    </div>
  );
}

export default App;
