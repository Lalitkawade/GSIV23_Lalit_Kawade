import React, {useState} from "react";
import Modal from "./Modal";


const Card = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    console.log(props.info)
    let image_path = "https://image.tmdb.org/t/p/w500"


    return (
        <>
        <div className="movie" onClick={openModal}>
            <img src={image_path+props.info.poster_path} alt="flim" className="poster"></img>
            <div className="movie-detail">
                <div className="box">
                    <h4 className="title">{props.info.title}</h4>
                    <p className="rating">({props.info.vote_average})</p>
                </div>
                <div className="overview">
                    <h2>Description:</h2>
                    {props.info.overview}
                </div>
            </div>
           {isModalOpen && <Modal
           isOpen={isModalOpen}
           onClose={closeModal}
           title={props.info.title}
           overview={props.info.overview}
           imagePath={image_path+props.info.poster_path}
           release_date={props.info.release_date}
           /> }

        </div>
        </>
    )
}
export default Card;