import React from "react";
import Hero from "../components/Hero";
import MovieLists from "../components/MovieLists";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieLists title="upcoming" url={endpoints.upcoming} />
      <MovieLists title="trending" url={endpoints.trending} />
      <MovieLists title="top rated" url={endpoints.topRated} />
      <MovieLists title="series" url={endpoints.series} />
      <MovieLists title="popular" url={endpoints.popular} />
    </>
  );
};

export default Home;
