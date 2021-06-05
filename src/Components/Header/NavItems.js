import React from 'react';
import { Link } from 'react-scroll';
import './NavItems.css';

function NavItems() {
  return (
    <div className="nav-items-container">
      <ul>
        <li>
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
      </ul>
    </div>
  );
}

export default NavItems;
