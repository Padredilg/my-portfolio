import React, { useState } from "react";
import Modal from '../Modal';
import { Button } from 'react-bootstrap'

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
  const [currentProject, setCurrentProject] = useState({});


  const handleClose = () => setShow(false);
  const handleShow = (currentProj) => {
    setCurrentProject(currentProj)
    setShow(true);
  };

  return (
    <div>
      <div className="projects-wrapper">
        {projects.map((project, i) => (
          <div>
            <Button onClick={()=>{handleShow(projects[i])}}>
              <img
                src={require(`../../assets/projects/${i}.png`).default}
                alt={project.name}
                className="primary-projects"
                key={project.name}
              />
            </Button>
          </div>
        ))}
      </div>
    {show? <Modal currentProject={currentProject} onClose={ handleClose } />:null}
    </div>
  )
}

export default Projects;