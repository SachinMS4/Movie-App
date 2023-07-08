import React from 'react';

import './styles.css';

function HeroSection({ scrollTo }) {
  return (
    <div className="h-screen w-[100vw] mx-auto bg-gradient-to-t from-[hsla(200,100%,85%,0.1)] to-[hsla(200,100%,85%,0)]">
      <div className="z-20 max-w-6xl mx-auto relative flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl mb-5 font-bold text-center">
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
