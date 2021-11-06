import React, { useState } from "react";
import Modal from '../Modal';
import { Button } from 'react-bootstrap'

function Projects({ category }) {
  const [featuredProjects] = useState([
    {
      index: 0,
      name: 'Campfire',
      shortdesc: 'Social Media for Coding Bootcampers',
      tech: 'HTML, CSS, JavaScript, Bootstrap Framework, Node.js, Express.js, MySQL, Sequelize ORM, Bcrypt, express-session, Handlebars, Socket.IO, Browserify, Uppy.',
      description: 'Social media for Bootcamp students and tech lovers. Users can create an account, check every post ever created, create their own posts and interact with others, personalize their profile page, and interact with other users currently online through a global chat.',
      github: 'https://github.com/Padredilg/campfire',
      deployed: 'https://campfire-social-media.herokuapp.com/'

    },
    {
      index: 1,
      name: 'Decide Eat',
      shortdesc: 'Date night-in app',
      tech: 'HTML, CSS, JavaScript, jQuery, Bulma, Spoonacular API, Spotify API',
      description: 'Find the perfect combination of food and music for your dinner night. Users can search recipes by their names or cuisine styles, as well as take a quiz to help them decide what to do for dinner, cocktail and also what Spotify playlist to listen to.',
      github: 'https://github.com/Padredilg/decide-eat',
      deployed: 'https://padredilg.github.io/decide-eat/'
    },
  ]);
  const [nonFeaturedProjects] = useState([
    {
      index: 1,
      name: 'Weather App',
      shortdesc: 'Find out the weather for any city!',
      tech: 'HTML, CSS, more...',
      description: 'weather description bla bla bla',
      github: 'https://github.com/Padredilg/weather-app',
      deployed: 'https://github.com/Padredilg/weather-app'

    },
  ]);

  const [currentProject, setCurrentProject] = useState({});

  const [show, setShow] = useState(false);
  const handleShow = (currentProj) => {
    setCurrentProject(currentProj)
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* featured projects */}
      <div className="projects-wrapper">
        {featuredProjects.map((project, i) => (
          <Button
            className="project-button"
            variant="link"
            onClick={() => { handleShow(featuredProjects[i]) }}
          >
            <img
              src={require(`../../assets/projects/${i}.png`).default}
              alt={project.name}
              className="project-image featured-project"
              key={project.name}
            />
            <div class="project-label">
              <h6 className="label-title">{project.name}</h6>
              <p className="label-description">{project.shortdesc}</p>
              <p className="label-read-more">Click to Read More</p>
            </div>

          </Button>
        ))}
      </div>
      {/* non-featured-projects */}
      <div className="projects-wrapper">
        {nonFeaturedProjects.map((project, i) => (
          <Button
            className="project-button"
            variant="link"
            onClick={() => { handleShow(featuredProjects[i]) }}
          >
            <img
              src={require(`../../assets/projects/${i}.png`).default}
              alt={project.name}
              className="project-image"
              key={project.name}
            />
            <div class="project-label small-label">
              <h6 className="label-title">{project.name}</h6>
              <p className="label-description">{project.shortdesc}</p>
              <p className="label-read-more">Click to Read More</p>
            </div>

          </Button>
        ))}
      </div>

      {show ? <Modal currentProject={currentProject} onClose={handleClose} /> : null}
    </div>
  )
}

export default Projects;