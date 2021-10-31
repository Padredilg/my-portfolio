import React, { useState } from 'react';
import backgroundVideo from './components/BackgroundVideo/FallingStars.mp4';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div>
      <video autoPlay loop muted className="bg-vid">
          <source src={backgroundVideo} type="video/mp4" />
      </video>

      <CustomCursor />
      
    </div>
  );
}

export default App;
