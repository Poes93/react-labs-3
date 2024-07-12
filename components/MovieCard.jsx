import React from 'react';
import './styles/MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="movie-card-img" />
            <div className="movie-card-content">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-release-date">{movie.releaseDate}</p>
                <p className="movie-card-description">{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieCard;
