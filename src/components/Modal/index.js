import React from "react";
import { Button, Modal } from 'react-bootstrap'

function ProjectModal({ onClose, currentProject }) {
    const { name, index, description, tech, github, deployed } = currentProject;
    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* Project Image */}
                <img
                    src={require(`../../assets/projects/${index}.png`).default}
                    alt={name}
                    className="modal-image"
                />
                {/* Links to github and deployed */}
                <div className="modal-links">
                    <a href={github} target="_blank">
                        <img
                            src={require(`../../assets/links/github.png`).default}
                            alt='github link'
                            className="modal-link"
                        />
                    </a>
                    <a href={deployed} target="_blank">
                        <img
                            src={require(`../../assets/links/deployed.png`).default}
                            alt='github link'
                            className="modal-link"
                        />
                    </a>
                </div>
                {/* Description */}
                <h5 className="mt-3 modal-section-title">Description:</h5> 
                <p className="modal-text">{description}</p>
                {/* Tech */}
                <h5 className="mt-3 modal-section-title">Tech Used:</h5>
                <p className="modal-text">{tech}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal;