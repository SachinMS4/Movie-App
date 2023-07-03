import React from 'react';

import './style.css';
import { popularityIcon, ratingIcon } from '../../images';

function MovieCard({ data }: any) {
  const { poster_path, id, original_title, vote_average, popularity } = data;

  const imgUrl = 'http://image.tmdb.org/t/p/w500/';

  return (
    <div key={id} className="movie-card">
      <img className="poster" src={`${imgUrl}${poster_path}`} alt="Movie Poster" />

      <div className="card-details">
        <h3>{original_title.toUpperCase()}</h3>

        <div className="movie-data">
          <div>
            <p>Rating</p>
            <p className="rating">
              {vote_average || 'NA'}
              <img src={ratingIcon} alt="Rating" />
            </p>
          </div>

          <div>
            <p>Popularity</p>
            <p className="popular">
              {popularity}
              <img src={popularityIcon} alt="Popular" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
