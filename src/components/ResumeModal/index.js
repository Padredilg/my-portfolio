import React, { useState } from "react";
import { Button, Modal, CloseButton } from 'react-bootstrap';
import coloredResume from '../../assets/resumes/colored-resume.pdf'
import BnWResume from '../../assets/resumes/blacknwhite-resume.pdf'

function ResumeModal({ onClose }) {
    const [colored, setColored] = useState(false);

    const handleResume = (resume) => {
        if (resume === 'colored') {
            setColored(true)
        }
        else {
            setColored(false)
        }
    }

    return (
        <Modal show onHide={onClose} size="lg">
            <Modal.Header>
                <Modal.Title>My Resume</Modal.Title>
                <Button className="resume-style-button" variant="info" onClick={() => { handleResume('colored') }}>Artsy</Button>
                <Button className="resume-style-button" variant="light" onClick={() => { handleResume('blacknwhite') }}>Black'n White</Button>
                
                {colored ?
                    <a className="resume-download-button" href={coloredResume} >Download</a>
                    :
                    <a className="resume-download-button" href={BnWResume} >Download</a>
                }                
                
                
                <CloseButton variant="white" onClick={onClose} />
            </Modal.Header>

            <Modal.Body>
                {/* Resume */}
                {colored ?
                    <img
                        src={require(`../../assets/resumes/colored-resume-img.png`).default}
                        alt='my resume'
                        className="modal-image"
                    />
                    :
                    <img
                        src={require(`../../assets/resumes/blacknwhite-resume-img.png`).default}
                        alt='my resume'
                        className="modal-image"
                    />
                }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-light" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ResumeModal;