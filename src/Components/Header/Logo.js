import React from 'react';
import { AiTwotoneUsb } from 'react-icons/ai';
import './Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo">
        <AiTwotoneUsb />
      </div>
      <p>USBly</p>
    </div>
  );
}

export default Logo;
