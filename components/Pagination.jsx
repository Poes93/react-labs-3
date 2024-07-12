import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="pagination-list">
                <li
                    className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                >
                    Previous
                </li>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className={`pagination-item ${currentPage === number ? 'active' : ''}`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </li>
                ))}
                <li
                    className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                >
                    Next
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
