import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { MovieContext } from "../../context/Context";
import MovieCard from "../../components/movie-card";

function Home() {
  const movie = useContext(MovieContext);

  console.log("home");

  // Todo: Fetch and load next page when user scrolls to bottom.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const currentPageNo = 1;
        if (currentPageNo) {
          console.log("end reached");
        }
      }
    });
  }, []);

  // Todo: Add skeleton loader
  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <h2 className="head-title">Top 20 Trending Movies of This Week</h2>

      <div className="container">
        {movie?.map((item) => (
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
