import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} MovieDB. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
