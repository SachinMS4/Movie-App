import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../../components/movie-card';
import { useTrendingMovies } from '../../../services/use-trending-movies';
import './styles.css';

const TrendingMovies = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } = useTrendingMovies();

  const moviesList = useMemo(() => data?.pages?.flatMap(page => page?.results) || [], [data]);

  // Fetch next page when user scrolls to end.
  useEffect(() => {
    const handleEndReached = () => {
      if (
        hasNextPage &&
        window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleEndReached);

    return () => window.removeEventListener('scroll', handleEndReached);
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className='max-w-6xl mx-auto' ref={ref}>
      <h3 className="text-3xl py-5 font-semibold">
        Top Trending Movies of This Week
      </h3>

      <div className="flex flex-wrap gap-20 justify-between">
        {moviesList?.map((item, index) => 
            {
            return index < moviesList.length - moviesList.length % 3 &&<Link
            to={`/overview/${item.id}`}
            key={item.id}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <MovieCard data={item} />
          </Link>}
        )}
      </div>

      {(isLoading || isFetchingNextPage) && (
        <div className="spinner">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
});

export default TrendingMovies;
