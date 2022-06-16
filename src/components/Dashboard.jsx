import React from "react";
import { useAuth } from "../firebase";
import bookCover from "../assets/images/book1.png";

const Dashboard = () => {
  const currentUser = useAuth();
  return (
    <div>
      <header className="my-4">
        <span className="">{currentUser?.email}</span>
      </header>
      <section>
        <div className="mb-8 sm:w-4/6">
          <p className="text-gray-400">Welcome back, {currentUser?.email}!</p>
          <h2 className="text-2xl">What do you want to read today?</h2>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 p-3 w-full rounded  shadow-sm"
          />
        </div>
      </section>

      <section className="my-6">
        <div className="flex gap-4 flex-nowrap mb-4 overflow-x-scroll">
          <span className="block shrink-0 ">Novel</span>
          <span className="block shrink-0 ">Self-love</span>
          <span className="block shrink-0 ">sci-fi</span>
          <span className="block shrink-0 ">romance</span>
          <span className="block shrink-0 ">philosophy</span>
          <span className="block shrink-0 ">philosophy</span>
        </div>

        <div className="flex gap-4 flex-nowrap mb-4 overflow-x-scroll">
          <div className="shrink-0">
            <img
              className=" shadow-xl h-[200px] rounded-2xl"
              src={bookCover}
              alt="Book Cover"
            />
          </div>
          <div className="shrink-0">
            <img
              className=" shadow-xl h-[200px] rounded-2xl"
              src={bookCover}
              alt="Book Cover"
            />
          </div>
          <div className="shrink-0">
            <img
              className=" shadow-xl h-[200px] rounded-2xl"
              src={bookCover}
              alt="Book Cover"
            />
          </div>
          <div className="shrink-0">
            <img
              className=" shadow-xl h-[200px] rounded-2xl"
              src={bookCover}
              alt="Book Cover"
            />
          </div>

          <div className="shrink-0">
            <img
              className=" shadow-xl h-[200px] rounded-2xl"
              src={bookCover}
              alt="Book Cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
