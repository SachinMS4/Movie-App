import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY;

export const MovieProvider = ({ children }) => {
	const [movie, setmovie] = useState([]);

	let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

	useEffect(() => {
		axios.get(url).then((resp) => setmovie(resp.data.results));
	}, [url]);

	return <MovieContext.Provider value={movie}>{children}</MovieContext.Provider>;
};

export const MovieContext = createContext();
