import React from 'react';
import { AiTwotoneUsb } from 'react-icons/ai';
import './Logo.css';
import { Link } from 'react-scroll';

function Logo({ isDropped }) {
  return (
    <Link
      to="home"
      smooth="true"
      duration={500}
      className={` logo-container ${isDropped ? 'logo-container-scroll' : ''}`}
    >
      <div className="logo">
        <AiTwotoneUsb />
      </div>
      <p>USBly</p>
    </Link>
  );
}

export default Logo;
