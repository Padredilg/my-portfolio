import React from "react";
import { Button, Modal } from 'react-bootstrap'

function ProjectModal({ onClose, currentProject }) {
    const { name, tech, description, index } = currentProject;
    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {description}
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