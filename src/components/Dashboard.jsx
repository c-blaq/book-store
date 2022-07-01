import React, { useState } from "react";
import { logout, useAuth } from "../firebase";
import { BsFillPersonFill, BsSearch, BsFillMicFill } from "react-icons/bs";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper";

import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";

const Dashboard = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);
  const [newbooks, setNewBooks] = useState([]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/sign-in");
    } catch {
      console.log("something went wrong!");
    }
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.itbook.store/1.0/search/${encodeURIComponent(searchInput)}`
      );
      setSearchInput("");
      setBooks(data.books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchNewBooks = async () => {
      try {
        const { data } = await axios.get("https://api.itbook.store/1.0/new");
        setNewBooks(data.books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewBooks();
  }, []);

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
          <p className="text-gray-400">Welcome {currentUser?.email}!</p>
          <h2 className="text-2xl">What do you want to read today?</h2>
        </div>

        <div className="relative">
          <input
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : "")}
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-gray-100 p-3 pl-6 w-full rounded shadow-sm outline-none"
          />
          <span
            onClick={handleSearch}
            className="top-1/3 right-4 cursor-pointer absolute text-gray-400"
          >
            <BsSearch />
          </span>
        </div>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-bold">Results</h2>

        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          className="mySwiper"
        >
          {books.length === 0 ? (
            <p className="text-lg mb-10">No book found!</p>
          ) : (
            books
              .filter((book) => Boolean(book.image))
              .map((book) => {
                return (
                  <SwiperSlide
                    key={book.isbn13}
                    className="block w-1/3 smaller:w-1/4 sm:w-1/4 lg:w-1/6"
                  >
                    <Link
                      to={`/book/details/${book.isbn13}.json`}
                      className="cursor-pointer swiper-slide block"
                    >
                      <div>
                        <img
                          className=" h-52 sm:h-80 lg:h-96 image.png rounded-2xl object-cover pointer-events-none"
                          src={book.image}
                          alt="Book Cover"
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })
          )}
        </Swiper>
      </section>

      <section>
        <h2 className="text-2xl font-bold">New Arrival</h2>

        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          className="mySwiper"
        >
          {newbooks
            .filter((book) => Boolean(book.image))
            .map((book) => {
              return (
                <SwiperSlide
                  key={book.isbn13}
                  className="block w-1/3 smaller:w-1/4 sm:w-1/4 lg:w-1/6"
                >
                  <Link
                    to={`/book/details/${book.isbn13}.json`}
                    className="cursor-pointer"
                  >
                    <img
                      className=" h-52 sm:h-80 lg:h-96 image.png rounded-2xl object-cover pointer-events-none"
                      src={book.image}
                      alt="Book Cover"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
