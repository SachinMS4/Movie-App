import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";
import ratingIcon from "../../images/star.png";
import popularIcon from "../../images/trending.png";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY;

function Overview() {
	const param = useParams();
	const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${API_KEY}`;

	const [movieDetails, setMovieDetails] = useState();

	useEffect(() => {
		axios.get(url).then((resp) => setMovieDetails(resp.data));
	}, [url]);

	if (!movieDetails) return <h1>Loading...</h1>;

	return (
		<div key={movieDetails.id} className="movie-details">
			<img src={`${IMG_BASE_URL}${movieDetails.poster_path}`} alt="Movie Poster"></img>

			<div className="movie-info" style={{ backgroundImage: `${IMG_BASE_URL}${movieDetails.backdrop_path}` }}>
				<h3 className="movie-title">{movieDetails.original_title}</h3>

				<p>
					{movieDetails?.genres?.map((genre) => (
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
							<img src={popularIcon} alt="Popular"></img>
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
								? new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
										notation: "compact",
								  }).format(movieDetails?.budget)
								: "NA"}
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
								? new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
										notation: "compact",
								  }).format(movieDetails?.revenue)
								: "NA"}
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
