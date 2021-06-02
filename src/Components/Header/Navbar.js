import { React, useState, useEffect } from 'react';
import Logo from './Logo';
import NavItems from './NavItems';
import Button from './Button';
import './Navbar.css';
import MenuIcon from './MenuIcon';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').className = 'navbar navbar-scroll';
      document.querySelector('.nav-items-container').className =
        'nav-items-container nav-items-container-scroll';
      document.querySelector('.logo-container').className =
        'logo-container logo-container-scroll';
      document.querySelector('.button-container').className =
        'button-container button-container-scroll';
    } else {
      document.querySelector('.navbar').className = 'navbar';
      document.querySelector('.nav-items-container').className =
        'nav-items-container';
      document.querySelector('.logo-container').className = 'logo-container';
      document.querySelector('.button-container').className =
        'button-container';
    }
  };

  let dropdown;

  if (showMenu) {
    dropdown = (
      <div>
        <p>Hello dropdown</p>
      </div>
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className="navbar">
      <Logo />
      <NavItems />
      <Button
        className="btn"
        linkAdress="https://github.com/robinwettstaedt"
        content="SIGN UP"
      />
      <button
        className="menu-button"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <MenuIcon />
      </button>

      {dropdown}
    </nav>
  );
}

export default Navbar;
