import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./overview.css";

import ratingIcon from "../images/star.png";
import popularIcon from "../images/trending.png";

import { MovieContext } from "../context/Context";

function Overview() {
  const param = useParams();
  const movies = useContext(MovieContext);

  const [movie] = movies.filter((item) => Number(item.id) === Number(param.id));

  if (!movie) return <h1>Loading...</h1>;
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  let { poster_path, id, original_title, vote_average, popularity } = movie;

  console.log(param, poster_path);

  return (
    <div key={id} className="movie-details">
      <img src={`${imgUrl}${poster_path}`} alt="Movie Poster"></img>

      <div className="movie-info">
        <h3 className="title">{original_title}</h3>
        <div className="analytics">
          <h3 className="rating">
            Rating: {vote_average}
            <img src={ratingIcon} alt="Rating"></img>
          </h3>
          <h3 className="popular">
            Popularity: {popularity}
            <img src={popularIcon} alt="Popular"></img>
          </h3>
          <h3>Votes: {movie.vote_count}</h3>
          <h3>Release Date: {movie.release_date}</h3>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Overview;
