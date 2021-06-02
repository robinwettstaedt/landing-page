import React from 'react';
import './Button.css';

function Button({ linkAdress, content }) {
  return (
    <div className="button-container">
      <a href={linkAdress}>{content}</a>
    </div>
  );
}

export default Button;
