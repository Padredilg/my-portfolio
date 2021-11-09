import React, { useState } from "react";
import { Button, Modal, CloseButton } from 'react-bootstrap';
import coloredResume from '../../assets/resumes/colored-resume.pdf'
import BnWResume from '../../assets/resumes/blacknwhite-resume.pdf'

function ResumeModal({ onClose }) {
    const [colored, setColored] = useState(true);

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
                <Modal.Title>Resume</Modal.Title>
                <Button className="resume-style-button" variant="info" onClick={() => { handleResume('colored') }} id="colored-btn">Artsy</Button>
                <Button className="resume-style-button" variant="light" onClick={() => { handleResume('blacknwhite') }} id="bnw-btn">B&W</Button>
                
                {colored ?
                    <a className="resume-download-button" href={coloredResume} download id="dwnld-btn">
                        <img
                            src={require(`../../assets/links/download.png`).default}
                            alt=''
                            className="donwload-link"
                        />
                        Download
                    </a>
                    :
                    <a className="resume-download-button" href={BnWResume} download id="dwnld-btn">
                        <img
                            src={require(`../../assets/links/download.png`).default}
                            alt=''
                            className="donwload-link"
                        />
                        Download
                    </a>
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