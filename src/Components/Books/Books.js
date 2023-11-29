import React, { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";
import { AuthContext } from "../../Provider/AuthContextProvider";

export default function Books() {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://books-collection-server-side.vercel.app/books/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);

  console.log(books);
  return (
    <div className="bg-base-200 min-h-screen p-10 flex flex-col  items-center  ">
      <div className="mb-5">
        <h1 className="text-4xl text-center uppercase">Our Books</h1>
        <p className="text-2xl text-center p-4  text-slate-800 border-b-2 uppercase">
          ---List Favorite Your books---
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
