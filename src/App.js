import React, { useState } from 'react';
import backgroundVideo from './components/BackgroundVideo/FallingStars.mp4';

function App() {
  return (
    <div>
      <video autoPlay loop muted className="bg-vid">
          <source src={backgroundVideo} type="video/mp4" />
      </video>

      <a href="pack.com">LINK</a>
    </div>
  );
}

export default App;
