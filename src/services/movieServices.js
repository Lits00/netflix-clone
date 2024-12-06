const key = import.meta.env.VITE_TMDB_KEY;

const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`,
  comedy: `${baseUrl}/movie/popular?api_key=${key}`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export default endpoints