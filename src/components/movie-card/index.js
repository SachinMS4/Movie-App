import React from "react";

import ratingIcon from "../../images/star.png";
import popularIcon from "../../images/trending.png";
import "./style.css";

function MovieCard({ data }) {
	let { poster_path, id, original_title, vote_average, popularity } = data;

	const imgUrl = "http://image.tmdb.org/t/p/w500/";

	return (
		<div key={id} className="movie-card">
			<img className="poster" src={`${imgUrl}${poster_path}`} alt="Movie Poster" />
			<div className="card-details">
				<h3>{original_title.toUpperCase()}</h3>
				<h3 className="rating">
					{vote_average}
					<img src={ratingIcon} alt="Rating" />
				</h3>
				<h3 className="popular">
					{popularity}
					<img src={popularIcon} alt="Popular" />
				</h3>
			</div>
		</div>
	);
}

export default MovieCard;