import React from "react";
import study from "../assets/images/study.png";
import Button from "./Button";

export const Home = () => {
  return (
    <div className="my-10">
      <div className="sm:max-h-[525px] sm:w-full">
        <img
          className=" mx-auto h-[420px] block object-contain"
          src={study}
          alt="A man reading"
        />
      </div>

      <div className="text-center mx-auto my-14 w-4/5">
        <h2 className="text-xl mb-4">Read your favourite books</h2>
        <p className="text-sm text-[#9D9D9D]">
          All your favourites book in one place, read any book, staying at home,
          on travelling, or anywhere else
        </p>
      </div>

      <Button
        text="sign up"
        className="mx-auto block text-white font-bold  w-1/2 sm:w-1/4  py-4 rounded-xl bg-[#D45555]"
      />
    </div>
  );
};
