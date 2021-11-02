import React, { useState } from 'react';

import backgroundVideo from './components/BackgroundVideo/FallingStars.mp4';

import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Creations from './components/Creations';
import ContactForm from './components/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = ()=>{
    if(currentPage === 'Home'){
      return <Home />
    }
    else if(currentPage === 'About'){
      return <About />
    }
    else if(currentPage === 'Creations'){
      return <Creations />
    }
    else if(currentPage === 'Contact'){
      return <ContactForm />
    }
  }
  return (
    <div>
      <video autoPlay loop muted className="bg-vid">
          <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>

      {/* I probably need one more page to be calling the components */}
      {/* Maybe nest another ternary according to category selected */}
      <main>
        {renderPage()}
      </main>

    </div>
  );
}

export default App;
