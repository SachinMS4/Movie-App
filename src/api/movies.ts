import axios from "axios";

interface TrendingMoviesResp {
  page: number;
  total_pages: number;
  total_results: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: [number, number, number, number, number];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

// const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY;
const API_KEY = "1001cf476e9abff27f533980790d59a8";

export const trendingMovies = async (page = 1): Promise<TrendingMoviesResp> => {
  const url = `https://api.themoviedb.org/3/trending/movie/week`;

  const { data } = await axios.get(url, { params: { page, api_key: API_KEY } });
  return data;
};

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const movieDetails = async (movieId: string | undefined) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
};
