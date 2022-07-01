import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import { loginAuth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    return passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginAuth(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Username or password is incorrect");
    }
  };

  const handleDeleteErrorMessage = () => {
    setError("");
  };

  return (
    <div className="flex justify-center flex-col h-screen ">
      <div className="w-5/6 sm:w-3/4 lg:w-1/2 m-auto">
        <h2 className="mb-8 text-3xl text-center">log In</h2>
        <form action="">
          {error && (
            <div className="text-red-600 my-5 bg-gray-300 p-2 relative">
              <p>{error}</p>
              <span
                className="absolute top-1/3 right-4 cursor-pointer"
                onClick={handleDeleteErrorMessage}
              >
                <FaTimes />
              </span>
            </div>
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
              type={passwordType}
              placeholder="Password"
              ref={passwordRef}
            />
            {passwordType === "password" ? (
              <AiOutlineEye
                className="absolute top-1/4 right-[5%] cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute top-1/4 right-[5%] cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>

          <Button
            className="block bg-red-400 py-4 rounded-lg text-white w-1/2 sm:w-1/3 max-w-xs m-auto"
            type="submit"
            text="sign in"
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
            <Link to="/forgot-password" className="text-gray-500 ml-1">
              Click here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
