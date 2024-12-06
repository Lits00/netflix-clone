import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  return (
    <>
      <h2 className="font-nsans-bold capitalize md:text-2xl px-4 pt-3">{title}</h2>

      <div className="relative flex items-center px-2">
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieLists;
