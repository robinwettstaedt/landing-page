import React from 'react';
import Button from './Button';
import './Hero.css';
import iphone from '../../Assets/iphonemochupsmall.png';

function Hero() {
  return (
    <>
      <main id="home">
        <div className="image">
          <img src={iphone} alt="iphone" />
        </div>
        <div className="article-container">
          <article>
            <h1>Connecting the world through leading technologies</h1>
            <br />
            <br />
            <p className="hero-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quisquam commodi veniam officiis voluptatem mollitia possimus
              reiciendis maxime exercitationem. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quisquam commodi veniam officiis voluptatem mollitia possimus
              reiciendis maxime exercitationem.
            </p>
          </article>
          <br />
          <div className="btn-containe">
            <Button
              id="btn"
              linkAdress="https://github.com/robinwettstaedt"
              content="DOWNLOAD APP"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
