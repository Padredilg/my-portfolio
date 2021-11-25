import React, { useState } from "react";
import Modal from '../ProjectModal';
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
      shortdesc: 'Decide what to eat, drink, and listen to on your date night',
      tech: 'HTML, CSS, JavaScript, jQuery, Bulma, Spoonacular API, Spotify API',
      description: 'Find the perfect combination of food and music for your dinner night. Users can search recipes by their names or cuisine styles, as well as take a quiz to help them decide what to do for dinner, cocktail and also what Spotify playlist to listen to.',
      github: 'https://github.com/Padredilg/decide-eat',
      deployed: 'https://padredilg.github.io/decide-eat/'
    },
    {
      index: 2,
      name: 'High-Tech-Match-Love',
      shortdesc: 'Dating App for Web Developers.',
      tech: 'Cloudinary, Firebase, GitHub API, React, CSS, JWT, GraphQL, HTML, MongoDB, Express, Bcrypt, Javascript, Styled-Components, Mongoose, Heroku, Express Session, Dotenv, Node.j, dayjs',
      description: 'Web Developers can sign-up/login and start looking for their perfect developer counter-parts!',
      github: 'https://github.com/Lightfooted/High-Tech-Match-Love',
      deployed: 'https://high-tech-match.herokuapp.com/'
    },
  ]);
  const [nonFeaturedProjects] = useState([
    {
      index: 3,
      name: 'Weather Dashboard',
      shortdesc: 'Check the weather for any city',
      tech: 'HTML, CSS, JavaScript, Bootstrap, OpenWeatherMap API',
      description: 'Find out what the weather prospects are for any city that is listed in the OpenWeatherMap API. Cities previously searched will be listed on the left as clickable buttons and storaged in the browser localStorage. Storage and buttons can be cleared at any time.',
      github: 'https://github.com/Padredilg/weather-dashboard',
      deployed: 'https://padredilg.github.io/weather-dashboard/'
    },
    {
      index: 4,
      name: 'Code Quiz',
      shortdesc: 'Test your Coding Knowledge',
      tech: 'HTML, CSS, JavaScript',
      description: 'This quiz will test your knowledge on Coding. After answering all questions, your final score will be calculated based on how many questions you got right or wrong as well as how much time was left. The Brain Mascot will react according to your performance on the questions.',
      github: 'https://github.com/Padredilg/code-quiz',
      deployed: 'https://padredilg.github.io/code-quiz/'
    },
    {
      index: 5,
      name: 'Budget Tracker',
      shortdesc: 'Keep Track of your Transactions',
      tech: 'HTML, CSS, JavaScript, indexedDb, Service-Workers, manifest.json, express.js, MongoDB, Mongoose',
      description: 'The user can keep track of their earnings and expenses by submitting their values along with a name every time they execute a transaction. The budget tracker can be downloaded on desktops through the URL download button.',
      github: 'https://github.com/Padredilg/budget-tracker',
      deployed: 'https://budget-tracker-padredilg.herokuapp.com/'
    },
    {
      index: 6,
      name: 'Tech Blog',
      shortdesc: 'Post about new Tech and Code',
      tech: 'express, express-handlebars, CSS, JavaScript, bcrypt, connect-session-sequelize, dotenv, express-session, mysql2, sequelize',
      description: 'Tech Blog is exactly what the name suggests, a blog directed for tech lovers! Users can create their accounts, create posts, and interact with each other\'s posts by commenting or liking them.',
      github: 'https://github.com/Padredilg/tech-blog',
      deployed: 'https://tech-blog-padredilg.herokuapp.com/'
    },
    {
      index: 7,
      name: 'Team Profile Generator',
      shortdesc: 'Keep track of your engineering team',
      tech: 'HTML, CSS JavaScript, Inquirer, Jest',
      description: 'Information on how to use this app can be found by clicking on the Github link above. This application requires the user to use the terminal on their IDE environment to input the information about their team. Upon starting the application the user will be prompted for the information about each team member. Upon completion, the html file containing the team roster will be automatically generated.',
      github: 'https://github.com/Padredilg/team-profile-generator',
      deployed: null
    },
    {
      index: 8,
      name: 'Git it Done',
      shortdesc: "Track Github Repos and their open Issues",
      tech: 'HTML, CSS JavaScript',
      description: 'Search repos by user, or look up some other repos by topic to find out what are the open issues in them.',
      github: 'https://github.com/Padredilg/git-it-done',
      deployed: 'https://padredilg.github.io/git-it-done/'
    },
    {
      index: 9,
      name: 'Taskmaster',
      shortdesc: "Keep an eye on your upcoming tasks",
      tech: 'HTML, CSS, JavaScript, jQuery, Bootstrap',
      description: 'A friendly and interactive program for the user to organize their tasks by date, and to keep track of their deadlines.',
      github: 'https://github.com/Padredilg/taskmaster-pro',
      deployed: 'https://padredilg.github.io/taskmaster-pro/'
    },
    {
      index: 10,
      name: 'Pizza Hunt',
      shortdesc: "Share your favorite pizza with others",
      tech: 'HTML, CSS, JavaScript, Express.js, MongoDB, Mongoose',
      description: "Pizza hunt is a simple social media in which users can share their ideas about tasty and innovative pizza combinations. Users can comment on other's creations and also reply to comments.",
      github: 'https://github.com/Padredilg/pizza-hunt',
      deployed: 'https://pizza-hunt-padredilg.herokuapp.com/'
    },
    {
      index: 11,
      name: 'Photo-Port',
      shortdesc: "Photo Portfolio for Lyza",
      tech: 'React and its dependencies',
      description: "This is a simple portfolio created for Lyza using React. The portfolio was created according to the mock up provided by her.",
      github: 'https://github.com/Padredilg/photo-port',
      deployed: 'https://padredilg.github.io/photo-port/'
    },
    {
      index: 12,
      name: 'Password Generator',
      shortdesc: "Generate unique passwords",
      tech: 'HTML, CSS, JavaScript',
      description: "Generate a password according to the criteria you define.",
      github: 'https://github.com/Padredilg/password-generator',
      deployed: 'https://padredilg.github.io/password-generator/'
    },
    {
      index: 13,
      name: 'My First Portfolio',
      shortdesc: "First portfolio that I created",
      tech: 'HTML, CSS',
      description: "Within two weeks of learning how to code using HTML and CSS, I challenged myself to create this portfolio. It is now outdated as it is not the portfolio that I use anymore.",
      github: 'https://github.com/Padredilg/my-first-portfolio',
      deployed: 'https://padredilg.github.io/my-first-portfolio/'
    },
    {
      index: 14,
      name: 'e-Commerce Back-End',
      shortdesc: "Back-end structure for an e-Commerce site",
      tech: 'JavaScript, dotenv, express, mysql2, sequelize',
      description: "Back-End structure for a company's software that needs to store info about Products, along with their Categories, and Tags. This program does not have a front-end, but it can be tested using a REST API Client such as Insomnia. Installation and Walkthrough video can be found at the github link above.",
      github: 'https://github.com/Padredilg/e-commerce-back-end',
      deployed: null
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
            onClick={() => { handleShow(nonFeaturedProjects[i]) }}
          >
            <img
              src={require(`../../assets/projects/${project.index}.png`).default}
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