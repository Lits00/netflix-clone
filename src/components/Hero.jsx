import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";
import Spinner from "./Spinner";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      // console.log(response.data.results);
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    });
  }, []);

  // cuts the overview text to shorter length
  const trim = (str, length) => {
    if (!str) return "";

    return (str.length > length) ? `${str.slice(0, length)} ...` : str;
  }

  if (!movie)
    return (
      <>
        <Spinner />
      </>
    );

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[824px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[824px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />
        <div className="absolute w-full top-[20%] lg:top-[45%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 text-black rounded-md cursor-pointer py-2 px-5 hover:bg-gray-950 hover:text-white">play</button>
            <button className="capitalize border border-gray-300 rounded-md cursor-pointer py-2 px-5 ml-4 hover:border-red-600 hover:bg-red-600">watch later</button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] py-1">{trim(overview, 165)}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
