import { createContext, useEffect, useState } from "react";
import axios from "axios";

//API KEY: 1001cf476e9abff27f533980790d59a8

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movie, setmovie] = useState([]);

  let url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=1001cf476e9abff27f533980790d59a8";

  useEffect(() => {
    axios.get(url).then((resp) => setmovie(resp.data.results));
  }, [url]);

  console.log(movie);

  return (
    <MovieContext.Provider value={movie}>{children}</MovieContext.Provider>
  );
};
