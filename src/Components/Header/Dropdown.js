import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown({ classProp }) {
  return (
    <Router>
      <nav className={`dropdown-nav ${classProp}`}>
        <ul id="nav-list-mobile">
          <li id="home-li">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Dropdown;
