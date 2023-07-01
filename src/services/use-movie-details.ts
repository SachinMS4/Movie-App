import { useQuery } from '@tanstack/react-query';
import { movieDetails } from '../api/movies';

export const useMovieDetails = (movieId: string) => {
  return useQuery(['movie-details', movieId], () => movieDetails(movieId));
};
