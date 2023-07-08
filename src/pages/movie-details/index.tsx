import React from 'react';
import { useParams } from 'react-router-dom';

import './style.css';
import { useMovieDetails } from '../../services/use-movie-details';
import { IMG_BASE_URL } from '../../api/movies';
import { ratingIcon, popularityIcon } from '../../images';

function Overview() {
  const param = useParams();

  const { data: movieDetails, isLoading } = useMovieDetails(param?.id || '');

  console.log({movieDetails});
  

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div key={movieDetails.id} className="movie-details max-w-6xl mx-auto my-5">
      <img className='aspec-[3/2]' src={`${IMG_BASE_URL}${movieDetails.poster_path}`} alt="Movie Poster" />

      <div
        className="movie-info ms-10"
        // style={{
        //   background: `url(${IMG_BASE_URL}${movieDetails.backdrop_path})`,
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <h3 className="text-3xl font-bold">{movieDetails.original_title}</h3>
        <p className="movie-tagline">{movieDetails.tagline}</p>

        <p className="movie-genre">
          {movieDetails?.genres?.map((genre: any) => (
            <span id={genre.id}>{genre.name}</span>
          ))}
        </p>

        <div className="analytics">
          <div className="data-point">
            <p>
              {movieDetails.vote_average}
              <img src={ratingIcon} alt="Rating"></img>
            </p>
            <p>Rating</p>
          </div>

          <div className="data-point">
            <p>
              {movieDetails.popularity}
              <img src={popularityIcon} alt="Popular"></img>
            </p>
            <p>Popularity</p>
          </div>

          <div className="data-point">
            <p>{movieDetails.vote_count}</p>
            <p>Votes </p>
          </div>

          <div className="data-point">
            <p>{movieDetails.release_date}</p>
            <p>Release Date</p>
          </div>

          <div className="data-point">
            <p>
              {movieDetails?.budget
                ? new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    notation: 'compact',
                  }).format(movieDetails?.budget)
                : 'NA'}
            </p>
            <p>Budget </p>
          </div>

          <div className="data-point">
            <p>{movieDetails?.runtime} minutes</p>
            <p>Runtime</p>
          </div>

          <div className="data-point">
            <p>
              {movieDetails?.revenue
                ? new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    notation: 'compact',
                  }).format(movieDetails?.revenue)
                : 'NA'}
            </p>
            <p>Revenue </p>
          </div>
        </div>

        <p className="movie-overview">{movieDetails.overview}</p>
      </div>
    </div>
  );
}

export default Overview;
