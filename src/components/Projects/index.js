import React from "react";
import Modal from '../Modal';

function Projects({ category }) {
    const [projects] = useState([
        {
          name: 'Decide Eat',
          tech: 'HTML, CSS, JavaScript, jQuery, Bulma, Spoonacular API, Spotify API',
          description: 'Date night-in app. Find the perfect combination of food and music for your dinner night. Users can search recipes by their names or cuisine styles, as well as take a quiz to help them decide what to do for dinner, cocktail and also what Spotify playlist to listen to.'
        },
        {
            name: 'Campfire',
            tech: 'HTML, CSS, JavaScript, Bootstrap Framework, Node.js, Express.js, MySQL, Sequelize ORM, Bcrypt, express-session, Handlebars, Socket.IO, Browserify, Uppy.',
            description: 'Social media for Bootcamp students and tech lovers. Users can create an account, check every post ever created, create their own posts and interact with others, personalize their profile page, and interact with other users currently online through a global chat.'
        }
    ]);
    const currentProjects = projects.filter((project) => project.category === category);

    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i)=> {
      setCurrentProject({...image, index: i});
      setIsModalOpen(!isModalOpen);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div>
        {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
        <div className="">
          {currentProjects.map((image, i) => (
            <img
                src={require(`../../assets/small/${category}/${i}.jpg`).default}
                alt={image.name}
                className=""
                onClick={() => toggleModal(image, i)}
                key={image.name}
            />
          ))}
        </div>
      </div>  
    )
}

export default Projects;