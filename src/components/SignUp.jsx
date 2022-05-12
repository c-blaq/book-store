import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Button from "./Button";

const SignUp = () => {
  return (
    <div className="flex justify-center flex-col h-screen ">
      <form action="" className="w-5/6 sm:w-3/4 lg:w-1/2 m-auto">
        <div>
          <input
            className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
            type="text"
            placeholder="Full Name"
          />
        </div>

        <div>
          <input
            className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="relative">
          <input
            className="w-full bg-gray-100 border-b-4 py-4 pl-3 border-solid border-red-400 outline-none mb-4"
            type="password"
            placeholder="PassWord"
          />
          <AiOutlineEye className="absolute top-1/4 right-[5%]" />
        </div>

        <Button
          className="block bg-red-400 py-4 rounded-lg text-white w-1/2 sm:w-1/3 max-w-xs m-auto"
          type="submit"
          text="sign up"
        />
      </form>
    </div>
  );
};

export default SignUp;
