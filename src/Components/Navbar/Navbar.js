import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logos/IT_akadeemia_logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/homepage">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/timetable">Tunniplaan</Link></li>
        <li><Link to="/specialty">Erialad</Link></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span className="nav-item">Praktika <span className="arrow">&#9662;</span></span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/traineeships/info">Praktika üldinfo</Link></li>
              <li><Link to="/traineeships/worldwide">Praktika välismaal</Link></li>
              <li><Link to="/traineeships/võta">Praktika VÕTA-ga</Link></li>
              <li><Link to="/traineeships/offers">Praktikapakkumised</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/news">Uudised</Link></li>
        <li><Link to="/competitions">Võistlused</Link></li>
        <li><Link to="/contacts">Kontaktid</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;