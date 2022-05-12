import React from "react";
import Button from "./Button";
import bookCover from "../assets/images/book1.png";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 sm:w-5/6 my-10 mx-auto max-w-7xl">
      <Header />
      <div className="book-details">
        <div className="book-about">
          <img
            className="block shadow-xl w-1/2 my-4 mx-auto rounded-2xl sm:h-[350px] md:w-1/3 lg:h-[380px]"
            src={bookCover}
            alt="Book Cover"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold">The King Of Drugs</h3>
            <span className="block text-[#9D9D9D]">Nora Barrett</span>
            <span className="block">Ratings...</span>
          </div>
        </div>

        <div className="details mt-8">
          <div className="about-author">
            <h2 className="text-lg font-bold mb-2">About the author</h2>
            <p className="text-[#9D9D9D]">
              J.D. Salinger was an American writer, best known for his 1951
              novel The Catcher in the Rye. Before its publi cation, Salinger
              published several short stories in Story magazine
            </p>
          </div>

          <div className="book-overview my-4">
            <h2 className="text-lg font-bold mb-2">Overview</h2>
            <p className="text-[#9D9D9D]">
              The Catcher in the Rye is a novel by J. D. Salinger, partially
              published in serial form in 1945–1946 and as a novel in 1951. It
              was originally intended for adu lts but is often read by
              adolescents for its theme of angst, alienation and as a
              critique......
            </p>
          </div>
        </div>
      </div>

      <Button
        text="Read Book"
        className="mx-auto block mt-4 text-white font-bold  w-1/2 sm:w-1/4  py-4 rounded-xl bg-[#19191B]"
        onClick={() => navigate("/book")}
      />
    </div>
  );
};

export default BookDetails;
