import React from "react";


const Card = (props) => {
    console.log(props.info)
    let image_path = "https://image.tmdb.org/t/p/w500"


    return (
        <div className="movie">
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

        </div>
    )
}
export default Card;