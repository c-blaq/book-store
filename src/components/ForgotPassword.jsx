import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../firebase";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import Footer from "./Footer";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(emailRef.current.value);
      setMessage("Please, check your mail for further instructions!");
    } catch {
      setError("Incorrect email");
    }
  };

  const handleDeleteErrorMessage = () => {
    setError("");
  };

  return (
    <div className="flex justify-center flex-col h-screen ">
      <div className="w-5/6 sm:w-3/4 lg:w-1/2 m-auto">
        <h2 className="mb-8 text-3xl text-center">Reset Password</h2>
        {error ? (
          <div className="text-red-600 my-5 bg-gray-300 p-2 relative">
            <p>{error}</p>
            <span
              className="absolute top-1/3 right-4 cursor-pointer"
              onClick={handleDeleteErrorMessage}
            >
              <FaTimes />
            </span>
          </div>
        ) : message ? (
          <p className="my-5 p-2 bg-green-400 text-white">{message}</p>
        ) : (
          ""
        )}
        <form action="">
          <div>
            <input
              className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>

          <Button
            className="block bg-red-400 py-4 rounded-lg text-white w-1/2 sm:w-1/3 max-w-xs m-auto"
            type="submit"
            text="reset password"
            onClick={handleResetPassword}
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
            <Link to="/sign-in" className="text-gray-500 ml-1">
              Login here
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
