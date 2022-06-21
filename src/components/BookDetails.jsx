import React, { useEffect, useState } from "react";
import Button from "./Button";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const navigate = useNavigate();
  const { isbn } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBookDetails() {
      try {
        const { data } = await axios.get(
          `https://api.itbook.store/1.0/books/${parseInt(isbn)}`
        );
        setBooks(Array(data));
      } catch (err) {
        console.log(err);
      }
    }
    getBookDetails();
  }, [isbn]);

  return (
    <div>
      <Header />
      {books.map((book) => {
        return (
          <div className="book-details" key={book.isbn13}>
            <div className="book-about">
              <img
                className="block shadow-xl w-1/2 my-4 mx-auto rounded-2xl sm:h-[350px] md:w-1/3 lg:h-[380px]"
                src={book.image}
                alt="Book Cover"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <span className="block text-[#9D9D9D]">{book.authors}</span>
                <span className="block">ratings: {book.rating}</span>
              </div>
            </div>

            <div className="details mt-8">
              <div className="about-author">
                <h2 className="text-lg font-bold mb-2">About the author</h2>
                <p className="text-[#9D9D9D]">hhh</p>
              </div>

              <div className="book-overview my-4">
                <h2 className="text-lg font-bold mb-2">Overview</h2>
                <p className="text-[#9D9D9D]">{book.desc}</p>
              </div>
            </div>
            <Link
              to={{ pathname: `https://itbook.store/books/${book.isbn}` }}
              target="_blank"
            >
              <Button
                text="Get Book"
                className="mx-auto block mt-4 text-white font-bold  w-1/2 sm:w-1/4  py-4 rounded-xl bg-[#19191B]"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetails;
