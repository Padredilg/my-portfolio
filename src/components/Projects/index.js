import React, { useState } from "react";
// import Modal from '../Modal';
import { Button, Modal } from 'react-bootstrap'

function Projects({ category }) {
  const [projects] = useState([
    {
      name: 'Campfire',
      tech: 'HTML, CSS, JavaScript, Bootstrap Framework, Node.js, Express.js, MySQL, Sequelize ORM, Bcrypt, express-session, Handlebars, Socket.IO, Browserify, Uppy.',
      description: 'Social media for Bootcamp students and tech lovers. Users can create an account, check every post ever created, create their own posts and interact with others, personalize their profile page, and interact with other users currently online through a global chat.'
    },
    {
      name: 'Decide Eat',
      tech: 'HTML, CSS, JavaScript, jQuery, Bulma, Spoonacular API, Spotify API',
      description: 'Date night-in app. Find the perfect combination of food and music for your dinner night. Users can search recipes by their names or cuisine styles, as well as take a quiz to help them decide what to do for dinner, cocktail and also what Spotify playlist to listen to.'
    }
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    
    console.log(e.target);
    
    setShow(true);
  };

  return (
    <div>
      <div className="projects-wrapper">
        {projects.map((image, i) => (
          <div>
            <Button onClick={handleShow}>
              <img
                src={require(`../../assets/projects/${i}.png`).default}
                alt={image.name}
                className="primary-projects"
                key={image.name}
              />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                Body text
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;