import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/Context";

import MovieCard from "./MovieCard";

export default function Movie() {
  const movie = useContext(MovieContext);

  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <h2 className="head-title">Top 20 Trending Movies of The Week</h2>

      <div className="container">
        {movie.map((item) => (
          <Link
            to={`/overview/${item.id}`}
            key={item.id}
            style={{ color: "inherit", textDecoration: "inherit" }}>
            <MovieCard data={item}></MovieCard>
          </Link>
        ))}
      </div>
    </>
  );
}
