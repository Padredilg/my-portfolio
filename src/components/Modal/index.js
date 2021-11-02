import React from "react";

function Modal({ onClose, currentProject}) {
    const {name, tech, description, index} = currentProject;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${tech}/${index}.jpg`).default} alt="current tech" />
                <p>{description}</p>
                <button onBlur={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}
  
export default Modal;