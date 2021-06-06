import React from 'react';
import Button from './Button';
import './Hero.css';
import iphone from '../../Assets/iphonemochupsmall.png';
import mobileBg from '../../Assets/hero-mobile-bg.png';

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
          <Button
            id="btn"
            linkAdress="https://github.com/robinwettstaedt"
            content="DOWNLOAD APP"
          />
        </div>
        <div className="mobile-container">
          <div className="mobile-hero-card">
            <img
              className="mobile-hero-img"
              src={mobileBg}
              alt="the background"
            />
            <article className="hero-card-article">
              <h1>
                <span>Connecting </span> the world through leading technologies
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quisquam commodi veniam officiis voluptatem mollitia possimus
                reiciendis maxime exercitationem. <br />
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
