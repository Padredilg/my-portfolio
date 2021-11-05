import React from "react";

function Modal({ onClose, currentProject}) {
    const {name, tech, description, index} = currentProject;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/projects/${index}.png`).default} alt="project" />
                <p>Tech Used: ${tech}</p>
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}
  
export default Modal;