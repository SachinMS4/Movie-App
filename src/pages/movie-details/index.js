import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../../context/Context";
import "./style.css";
import ratingIcon from "../../images/star.png";
import popularIcon from "../../images/trending.png";

function Overview() {
	const param = useParams();
	const movies = useContext(MovieContext);

	const [movie] = movies.filter((item) => Number(item.id) === Number(param.id));

	if (!movie) return <h1>Loading...</h1>;

	const imgUrl = "https://image.tmdb.org/t/p/w500/";
	let { poster_path, id, original_title, vote_average, popularity } = movie;

	return (
		<div key={id} className="movie-details">
			<img src={`${imgUrl}${poster_path}`} alt="Movie Poster"></img>

			<div className="movie-info">
				<h3 className="movie-title">{original_title}</h3>
				<div className="analytics">
					<div>
						<div className="data-point">
							<p>
								{vote_average}
								<img src={ratingIcon} alt="Rating"></img>
							</p>
							<p>Rating</p>
						</div>
						<div className="data-point">
							<p>
								{popularity}
								<img src={popularIcon} alt="Popular"></img>
							</p>
							<p>Popularity</p>
						</div>
					</div>
					<div>
						<div className="data-point">
							<p>{movie.vote_count}</p>
							<p>Votes </p>
						</div>
						<div className="data-point">
							<p>{movie.release_date}</p>
							<p>Release Date</p>
						</div>
					</div>
				</div>
				<p className="movie-overview">{movie.overview}</p>
			</div>
		</div>
	);
}

export default Overview;
