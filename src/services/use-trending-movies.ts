import { useInfiniteQuery } from "@tanstack/react-query";
import { trendingMovies } from "../api/movies";

export const useTrendingMovies = () => {
  return useInfiniteQuery(
    ["trending-movies"],
    ({ pageParam = 1 }) => trendingMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage?.page < lastPage?.total_pages) return lastPage?.page + 1;
      },
    }
  );
};
