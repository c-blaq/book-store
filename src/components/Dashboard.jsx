import React, { useState } from "react";
import { logout, useAuth } from "../firebase";
import bookCover from "../assets/images/book1.png";
import bookCover2 from "../assets/images/book2.png";
import { BsFillPersonFill, BsSearch, BsFillMicFill } from "react-icons/bs";
import axios from "axios";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  new Swiper(".swiper", {
    spaceBetween: 10,
    slidesPerView: 2,
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/sign-in");
    } catch {
      console.log("something went wrong!");
    }
  };

  const handleSearch = async () => {
    const { data } = await axios.get(
      `http://openlibrary.org/search.json?q=${encodeURIComponent(searchInput)}`
    );
    setBooks(data.docs);
  };

  return (
    <div>
      <header className="my-4">
        <div className="flex text-right items-center">
          <div className="bg-gray-200 rounded-[50%] ml-auto mr-2  w-10 h-10 flex items-center justify-center text-2xl text-gray-400 ">
            <BsFillPersonFill />
          </div>
          <Button
            type="button"
            text="logout"
            className="h-10 px-4  bg-red-500 text-white rounded"
            onClick={handleLogout}
          />
        </div>
      </header>
      <section>
        <div className="mb-8 sm:w-4/6">
          <p className="text-gray-400">Welcome back, {currentUser?.email}!</p>
          <h2 className="text-2xl">What do you want to read today?</h2>
        </div>

        <div className="relative">
          <span className="absolute top-1/3 left-2 text-gray-400">
            <BsSearch />
          </span>
          <input
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : "")}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-gray-100 p-3 pl-6 w-full rounded shadow-sm outline-none"
          />
          <span
            onClick={handleSearch}
            className="top-1/3 right-2 absolute text-gray-400"
          >
            <BsFillMicFill />
          </span>
        </div>
      </section>

      <section className="my-6">
        <div className="swiper overflow-x-visible">
          <div className="swiper-wrapper">
            <span className=" swiper-slide ">Novel</span>
            <span className=" swiper-slide ">Self-love</span>
            <span className=" swiper-slide ">sci-fi</span>
            <span className=" swiper-slide ">romance</span>
            <span className=" swiper-slide ">philosophy</span>
            <span className=" swiper-slide ">philosophy</span>
          </div>
          <div className="swipper-scrollbar"></div>
        </div>

        <div className="swiper my-6">
          <div className="swiper-wrapper">
            {books
              .filter((book) => Boolean(book.cover_i))
              .map((book) => {
                return (
                  <div className="swiper-slide" key={book.key}>
                    <img
                      className=" shadow-xl h-[200px] rounded-2xl"
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt="Book Cover"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">New Arrival</h2>

        <div className="swiper my-6">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <img
                className=" shadow-xl h-[200px] rounded-2xl"
                src={bookCover}
                alt="Book Cover"
              />
            </div>
            <div className="swiper-slide ">
              <img
                className=" shadow-xl h-[200px] rounded-2xl"
                src={bookCover2}
                alt="Book Cover"
              />
            </div>
            <div className="swiper-slide ">
              <img
                className=" shadow-xl h-[200px] rounded-2xl"
                src={bookCover}
                alt="Book Cover"
              />
            </div>
            <div className="swiper-slide ">
              <img
                className=" shadow-xl h-[200px] rounded-2xl"
                src={bookCover2}
                alt="Book Cover"
              />
            </div>

            <div className="swiper-slide ">
              <img
                className=" shadow-xl h-[200px] rounded-2xl"
                src={bookCover}
                alt="Book Cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
