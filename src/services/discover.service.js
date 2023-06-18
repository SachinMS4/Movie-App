import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { discoverMovies } from "../api/movies";

export const useTrendingMovies = () => {
  return useInfiniteQuery(
    "trending-movies",
    ({ pageParam = 1 }) => discoverMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage) return allPages.length + 1;
      },
    }
  );
};
