import React, { useState } from 'react';
import './styles/Filter.css';

const Filter = ({ onFilter }) => {
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter({ genre, year, rating });
    };

    return (
        <form className="filter-form" onSubmit={handleFilter}>
            <div className="filter-group">
                <label htmlFor="genre">Genre:</label>
                <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">All</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2020"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="e.g. 8.5"
                    step="0.1"
                    min="0"
                    max="10"
                />
            </div>

            <button type="submit" className="filter-button">Filter</button>
        </form>
    );
};

export default Filter;
