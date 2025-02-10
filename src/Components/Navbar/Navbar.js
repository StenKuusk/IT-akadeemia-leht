import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/homepage">Homepage</a></li>
                <li><a href="/timetable">Timetable</a></li>
                <li><a href="/specialty">Specialty</a></li>
                <li><a href="/traineeships">Traineeships</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/competitions">Competitions</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;