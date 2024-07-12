import React, { useState } from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
