import React from 'react';

import './styles.css';

function HeroSection({ scrollTo }) {
  return (
    <div className="hero-section mx-auto">
      <div className="overlay"></div>
      <div className="z-10 relative flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl mb-5 font-bold">
          Collection of Movies: Find and Search Your Favourite Movies.
        </h2>
        <button className="p-3 z-10" onClick={scrollTo}>
          What's Trending ?
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
