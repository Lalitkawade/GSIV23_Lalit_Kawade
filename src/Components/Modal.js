import React from "react";


const Modal = (props) => {

    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div className="modal-overlay" onClick={props.onClose}>
                <div className="modal-content" onClick={handleModalClick}>
                    <div className="modal-head">
                    <span>Movie Details</span>
                    <button className="close-button" onClick={props.onClose}> <i className="fa-solid fa-house"></i></button>
                    </div>
                    <img src={props.imagePath} alt="img" className="modal-poster"></img>
                    <div className="modal-header">
                        <h2>{props.title}</h2>
                        <h3>{props.release_date}</h3>
                    </div>
                    <div className="modal-body">
                        <p>{props.overview}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal;