import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleBox = () => {
    setRememberMe((prevState) => !prevState);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    // console.log(email);
    // console.log(password);
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/PH-en-20241202-TRIFECTA-perspective_7f24434d-e088-451b-aa73-d5c83e63d2c1_large.jpg"
        alt="/"
      />
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-bold">Login</h1>
            {/* Login Form */}
            <form onSubmit={formSubmit} className="w-full flex flex-col py-4">
              <label htmlFor="email">email</label>
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                id="email"
                name="email"
                placeholder="sample@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">password</label>
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold cursor-pointer hover:bg-red-700">
                Login
              </button>

              <div className="flex justify-between items-center text-gray-600">
                <div>
                  <input
                    className="mr-2 cursor-pointer"
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    checked={rememberMe}
                    onChange={toggleBox}
                  />
                  <label htmlFor="remember_me">Remember me</label>
                </div>
                <p>Need help?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
