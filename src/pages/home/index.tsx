import React, { useRef } from 'react';

import HeroSection from './hero-section';
import TrendingMovies from './trending-movies';

function Home() {
  const listRef = useRef<any>(null);

  const scrollToList = () => listRef?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <HeroSection scrollTo={scrollToList} />
      <TrendingMovies ref={listRef} />
    </>
  );
}

export default Home;
