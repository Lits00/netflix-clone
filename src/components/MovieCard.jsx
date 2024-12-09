import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContext";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { title, name, backdrop_path, poster_path } = movie;
  const { user } = UserAuth();

  const handleLikeBtn = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLike((prevState) => !prevState);
      if(like) {
        await updateDoc(userDoc, {
          liked: arrayRemove({ ...movie }),
        });
      } else {
        await updateDoc(userDoc, {
          liked: arrayUnion({ ...movie }),
        });
      }
    } else {
      alert("Please login to like a movie.");
    }
  };

  return (
    <div className="relative inline-block rounded-lg overflow-hidden cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] m-2">
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title ? title : name}
      />
      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
          {title ? title : name}
        </p>
        <button onClick={handleLikeBtn} className="cursor-pointer">
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
