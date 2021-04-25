import React from 'react'

const Movie = ({key,data,title,poster_path,overview,vote_average}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    const setRatingColor = (vote) =>{
        if(vote >= 8){
            return "green";
        }
        else if(vote >= 6)
        {
            return "orange";
        }
        else{
            return "red";
        }
    }

    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1522346513757-54c552451fdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"} alt="title"/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setRatingColor(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h3>Overview :</h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;
