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
    <>
      <h3 className="head-title" ref={ref}>
        Top 20 Trending Movies of This Week
      </h3>

      <div className="flex flex-wrap gap-8 justify-center">
        {moviesList?.map(item => (
          <Link
            to={`/overview/${item.id}`}
            key={item.id}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <MovieCard data={item} />
          </Link>
        ))}
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
    </>
  );
});

export default TrendingMovies;
