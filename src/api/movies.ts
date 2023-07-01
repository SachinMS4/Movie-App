import { get } from "./axios-api";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

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
export const trendingMovies = async (page = 1): Promise<TrendingMoviesResp> => {
  const url = `https://api.themoviedb.org/3/trending/movie/week`;

  const { data } = await get(url, { page });
  return data;
};

export const movieDetails = async (movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  const { data } = await get(url);
  return data;
};
