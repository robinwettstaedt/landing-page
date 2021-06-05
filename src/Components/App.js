import React from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Hero from './hero/Hero';
import About from './Content/About';
import Features from './Content/Features';
import Gallery from './Content/Gallery';
import Pricing from './Content/Pricing';
import Contacts from './Content/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Pricing />
      <Contacts />
    </>
  );
}

export default App;
