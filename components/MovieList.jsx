import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './MoviesList.css';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch('https://graph.imdbapi.dev/v1/movies'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data);
            setSearchResults(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`https://graph.imdbapi.dev/v1/search?query=${query}`);
            if (!response.ok) {
                throw new Error('Failed to search movies');
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFilter = ({ genre, year, rating }) => {
        const filteredMovies = movies.filter(movie => {
            return (
                (genre ? movie.genre.includes(genre) : true) &&
                (year ? movie.releaseDate.includes(year) : true) &&
                (rating ? movie.rating >= rating : true)
            );
        });
        setSearchResults(filteredMovies);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="movies-list-container">
            <SearchBar onSearch={handleSearch} />
            <Filter onFilter={handleFilter} />
            <div className="movies-list">
                {searchResults.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
