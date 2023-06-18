import axios from "axios";

export const discoverMovies = (page) => {
  return axios.get(url, { page });
};
