import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Button from "./Button";
import { signUpAuth, useAuth } from "../firebase";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // setLoading(true);
    try {
      setError("");
      await signUpAuth(emailRef.current.value, passwordRef.current.value);
      setLoading(true);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center flex-col h-screen ">
      <div className="w-5/6 sm:w-3/4 lg:w-1/2 m-auto">
        <h2 className="mb-8 text-3xl text-center">Create an Account</h2>
        <form action="">
          {error && <p>{error}</p>}
          <div>
            <input
              className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
              type="text"
              placeholder="Full Name"
              ref={nameRef}
            />
          </div>

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
            disabled={loading || currentUser !== null}
            onClick={handleSignUp}
          />
        </form>
        <div className="flex justify-between items-center  my-6">
          <span className="block">
            Already have an account?
            <Link to="/sign-in" className="text-gray-500 ml-1">
              Sign in
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

export default SignUp;
