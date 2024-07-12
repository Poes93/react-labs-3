import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Pagination from './Pagination';
import './styles/MovieList.css';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({});
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchMovies();
    }, [currentPage, filters, query]);

    const fetchMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://graph.imdbapi.dev/v1/movies?page=${currentPage}`);
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setMovies(data.movies);
            setSearchResults(data.movies);
            setTotalPages(data.totalPages);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleSearch = async (searchQuery) => {
        setQuery(searchQuery);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleFilter = (filterValues) => {
        setFilters(filterValues);
        setCurrentPage(1); // Reset to first page on new filters
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default MoviesList;
