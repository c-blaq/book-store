import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Button from "./Button";
import { loginAuth } from "../firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginAuth(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Username or password is incorrect");
    }
  };

  return (
    <div className="flex justify-center flex-col h-screen ">
      <div className="w-5/6 sm:w-3/4 lg:w-1/2 m-auto">
        <h2 className="mb-8 text-3xl text-center">log In</h2>
        <form action="">
          {error && (
            <p className="text-red-600 my-5 bg-gray-300 p-2">{error}</p>
          )}
          <div>
            <input
              className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>

          <div className="relative">
            <input
              className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <AiOutlineEye className="absolute top-1/4 right-[5%]" />
          </div>

          <Button
            className="block bg-red-400 py-4 rounded-lg text-white w-1/2 sm:w-1/3 max-w-xs m-auto"
            type="submit"
            text="sign up"
            onClick={handleLogin}
          />
        </form>
        <div className="flex justify-between items-center  my-6">
          <span className="block">
            Don't have an account?
            <Link to="/sign-up" className="text-gray-500 ml-1">
              Sign up
            </Link>
          </span>

          <span className="block">
            Forgot password?
            <Link to="/" className="text-gray-500 ml-1">
              Click here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;