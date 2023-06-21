import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import MovieCard from "../../components/movie-card";
import { useTrendingMovies } from "../../services/use-trending-movies";

function Home() {
  const { data, hasNextPage, fetchNextPage, isLoading } = useTrendingMovies();

  const moviesList = useMemo(() => {
    return data?.pages?.flatMap((page) => page?.results) || [];
  }, [data]);

  // Fetch next page when user scrolls to bottom.
  useEffect(() => {
    const handleEndReached = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        if (hasNextPage) fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleEndReached);

    return () => window.removeEventListener("scroll", handleEndReached);
  }, []);

  // Todo: Add skeleton loader
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h2 className="head-title">Top 20 Trending Movies of This Week</h2>

      <div className="container">
        {moviesList?.map((item) => (
          <Link
            to={`/overview/${item.id}`}
            key={item.id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <MovieCard data={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
