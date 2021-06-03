import { React, useState, useEffect } from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import Button from './Button';
import './Navbar.css';
import MenuIcon from './MenuIcon';
import Dropdown from './Dropdown';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [classToggle, setClassToggle] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').className = 'navbar navbar-scroll';
      document.querySelector('.nav-items-container').className =
        'nav-items-container nav-items-container-scroll';
      document.querySelector('.logo-container').className =
        'logo-container logo-container-scroll';
      document.querySelector('.button-container').className =
        'button-container button-container-scroll';
      document.querySelector('.menu-icon').className =
        'menu-icon menu-icon-scroll';
    } else {
      document.querySelector('.navbar').className = showMenu
        ? 'navbar-dropped navbar '
        : 'navbar';
      document.querySelector('.nav-items-container').className =
        'nav-items-container';
      document.querySelector('.logo-container').className = showMenu
        ? 'logo-container logo-container-scroll'
        : 'logo-container';
      document.querySelector('.button-container').className =
        'button-container';
      document.querySelector('.menu-icon').className = showMenu
        ? 'menu-icon menu-icon-scroll'
        : 'menu-icon';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleClick() {
    setShowMenu(!showMenu);
    setClassToggle(!classToggle);
  }
  return (
    <nav className={`navbar ${showMenu ? 'navbar-dropped' : ''}`}>
      <Logo isDropped={showMenu} />
      <NavItems />
      <Button
        className="btn"
        linkAdress="https://github.com/robinwettstaedt"
        content="SIGN UP"
      />
      <button
        className="menu-button"
        type="button"
        onClick={() => handleClick()}
      >
        <MenuIcon isDropped={showMenu} />
      </button>
      <Dropdown
        className="drop-container"
        classProp={classToggle ? 'visible' : 'invisible'}
      />
    </nav>
  );
}

export default Navbar;
