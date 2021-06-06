import React from 'react';
import { Link } from 'react-scroll';
import './Dropdown.css';

function Dropdown({ classProp }) {
  return (
    <nav className={`dropdown-nav ${classProp}`}>
      <ul id="nav-list-mobile">
        <li id="home-li">
          <Link to="home" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="features" smooth="true" duration={500}>
            Features
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth="true" duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth="true" duration={500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth="true" duration={500}>
            Contacts
          </Link>
        </li>
        <li>
          <a href="https://github.com/robinwettstaedt">Sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Dropdown;
