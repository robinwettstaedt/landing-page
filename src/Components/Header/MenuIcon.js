import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import './MenuIcon.css';

function MenuIcon({ isDropped }) {
  return (
    <>
      <div className={` menu-icon ${isDropped ? 'menu-icon-scroll' : ''}`}>
        <AiOutlineBars className="bars" />
      </div>
    </>
  );
}

export default MenuIcon;
