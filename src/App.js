import React, { useState } from 'react';

import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Creations from './components/Creations';
import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    {
      name:'Home',
      description: 'Initial page of this portfolio'
    },
    {
      name:'About',
      description: 'A little about who I am and what I have been through to get to where I am'
    },
    {
      name:'Creations',
      description: 'Check out some of the projects that I have created!'
    },
    {
      name:'Contact Me',
      description:'How can I be of help?'
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      {/* I probably need one more page to be calling the components */}

      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>

    </div>
  );
}

export default App;
