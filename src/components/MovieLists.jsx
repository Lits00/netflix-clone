import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieLists = ({ title, url }) => {
  const rowId = Math.floor(Math.random() * 1000)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset
  }

  return (
    <>
      <h2 className="font-nsans-bold capitalize md:text-2xl px-4 pt-3">
        {title}
      </h2>

      <div className="relative flex items-center px-2 group">
        <MdChevronLeft
          className="cursor-pointer bg-white rounded-sm h-1/2 absolute left-2 opacity-90 text-gray-700 z-10 hidden group-hover:block"
          size={40}
          onClick={() => slide(-1000)}
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          className="cursor-pointer bg-white rounded-sm h-1/2 absolute right-2 opacity-90 text-gray-700 z-10 hidden group-hover:block"
          size={40}
          onClick={() => slide(1000)}
        />
      </div>
    </>
  );
};

export default MovieLists;
