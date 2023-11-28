import React, { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";
import { AuthContext } from "../../Provider/AuthContextProvider";
import useBooks from "../../useBooks/useBooks";

export default function Books() {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/books/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);

  console.log(books);
  return (
    <div className="bg-base-200 min-h-screen p-20 flex flex-col justify-around items-center  ">
      <div>
        <h1 className="text-4xl text-center mb-4 uppercase">Our Books</h1>
        <p className="text-2xl text-center  text-slate-800 border-b-2">
          ---List Your books---
        </p>
      </div>
      <div className=" mt-5  grid grid-cols-1 gap-8   md:grid-cols-3">
        {books.map((book) => {
          return <Book book={book} />;
        })}
      </div>
    </div>
  );
}
