import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const handleUnlikeBtn = async (movie) => {
    const userDoc = doc(db, "users", user.email);
    await updateDoc(userDoc, {
      liked: arrayRemove(movie),
    });
  };

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().liked);
      });
    }
  }, [user?.email]);

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/PH-en-20241202-TRIFECTA-perspective_7f24434d-e088-451b-aa73-d5c83e63d2c1_large.jpg"
          alt="/"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-full h-[550px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16 text-center">
              <h1 className="capitalize text-3xl md:text-5xl font-nsans-bold my-2">
                my profile
              </h1>
              <p className="font-nsans-light text-gray-300 text-lg">
                {user.email}
              </p>
            </div>
            {/* list of liked shows */}
            <h2 className="font-nsans-bold capitalize md:text-2xl px-4 pt-3">
              my list
            </h2>

            <div className="relative flex items-center px-2 group">
              {movies.length >= 6 ? (
                <MdChevronLeft
                  className="cursor-pointer bg-white rounded-sm h-1/2 absolute left-2 opacity-90 text-gray-700 z-10 hidden group-hover:block"
                  size={40}
                  onClick={() => slide(-1000)}
                />
              ) : (
                ""
              )}

              <div
                id={`slider`}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="relative inline-block rounded-lg overflow-hidden cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] m-2"
                  >
                    <img
                      className="w-full h-40 block object-cover object-top"
                      src={createImageUrl(
                        movie.backdrop_path ?? movie.poster_path,
                        "w500"
                      )}
                      alt={movie.title ?? movie.name}
                    />
                    <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                      <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                        {movie.title ?? movie.name}
                      </p>
                      <button
                        onClick={() => handleUnlikeBtn(movie)}
                        className="cursor-pointer"
                      >
                        <FaHeart
                          size={20}
                          className="absolute top-2 left-2 text-gray-300"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {movies.length >= 6 ? (
                <MdChevronRight
                  className="cursor-pointer bg-white rounded-sm h-1/2 absolute right-2 opacity-90 text-gray-700 z-10 hidden group-hover:block"
                  size={40}
                  onClick={() => slide(1000)}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
