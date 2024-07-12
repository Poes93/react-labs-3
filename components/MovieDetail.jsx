import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieDetail();
    }, [id]);

    const fetchMovieDetail = async () => {
        try {
            const response = await fetch(`https://graph.imdbapi.dev/v1/movies/${id}`); 
            if (!response.ok) {
                throw new Error('Failed to fetch movie details');
            }
            const data = await response.json();
            setMovie(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <div className="movie-detail">
            <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="movie-detail-img" />
            <div className="movie-detail-content">
                <h2 className="movie-detail-title">{movie.title}</h2>
                <p className="movie-detail-release-date">Release Date: {movie.releaseDate}</p>
                <p className="movie-detail-description">{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
