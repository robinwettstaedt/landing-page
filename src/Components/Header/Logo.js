import React from 'react';
import { AiTwotoneUsb } from 'react-icons/ai';
import './Logo.css';

function Logo({ isDropped }) {
  return (
    <div
      className={` logo-container ${isDropped ? 'logo-container-scroll' : ''}`}
    >
      <div className="logo">
        <AiTwotoneUsb />
      </div>
      <p>USBly</p>
    </div>
  );
}

export default Logo;
