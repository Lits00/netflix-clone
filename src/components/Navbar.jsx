import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const userLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute bg-gray-500/5 backdrop-blur-0 w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
          notflix
        </h1>
      </Link>
      {console.log(user)}
      {user?.email ? (
        <div>
          <Link to={`/profile`}>
            <button className="capitalize pr-4 cursor-pointer">profile</button>
          </Link>
          <button
            onClick={userLogout}
            className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-gray-300 hover:text-black"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={`/login`}>
            <button className="capitalize pr-4 cursor-pointer">login</button>
          </Link>
          <Link to={`/sign-up`}>
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-gray-300 hover:text-black">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
