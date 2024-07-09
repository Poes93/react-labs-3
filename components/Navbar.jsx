import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have some basic styling in this file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MovieDB</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div>
        </nav>
    );
};

export default Navbar;
