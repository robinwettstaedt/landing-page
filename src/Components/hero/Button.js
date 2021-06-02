import React from 'react';
import './Button.css';
import { AiOutlineDownload } from 'react-icons/ai';

function Button({ linkAdress, content }) {
  return (
    <div className="hero-button-container">
      <a href={linkAdress} className="hero-button">
        <span>
          <AiOutlineDownload className="dl-logo" />
          {content}
        </span>
      </a>
    </div>
  );
}

export default Button;
