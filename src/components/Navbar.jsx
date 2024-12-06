import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute bg-gray-500/5 backdrop-blur-0 w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
          notflix
        </h1>
      </Link>
      <div>
        <Link to={`/login`}>
          <button className="capitalize pr-4">login</button>
        </Link>
        <Link to={`/sign-up`}>
          <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-gray-300 hover:text-black">sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
