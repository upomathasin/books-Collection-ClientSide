import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContextProvider";

export default function SearchBooks() {
  const [books, setBooks] = useState([]);

  const [searchedData, setSearchedData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://books-collection-server-side.vercel.app/books/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setSearchedData(data);
      });
  }, []);

  console.log(books);

  const handleTitleSearch = (e) => {
    setSearchedData(
      books.filter((book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const handleAuthorSearch = (e) => {
    setSearchedData(
      books.filter((book) =>
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const handleGenreSearch = (e) => {
    setSearchedData(
      books.filter((book) =>
        book.genre.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <h1 className="text-4xl text-center uppercase ">Search Books</h1>
        <p className="text-2xl text-center p-5  text-slate-800  uppercase">
          ---Search Books By title,author or genre---
        </p>
      </div>
      <div className="flex justify-center items-center  ">
        <div className="form-control me-2">
          <input
            onChange={handleTitleSearch}
            type="text"
            placeholder="Search By Title"
            className="input input-bordered input-success w-full max-w-xs ml-1"
          />
        </div>
        <div className="form-control">
          <input
            onChange={handleAuthorSearch}
            type="text"
            placeholder="Search By Author Name"
            className=" me-2 input input-bordered input-success w-full max-w-xs "
          />
        </div>
        <div className="form-control">
          <input
            onChange={handleGenreSearch}
            type="text"
            placeholder="Search by Genre"
            className="input input-bordered input-success w-full max-w-xs ml-1"
          />
        </div>
      </div>
      <div className="">
        <div className="overflow-x-auto m-5">
          <table className="  table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th> Book Name</th>
                <th>Author Name</th>
                <th>Genre</th>
                <th>Published Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {searchedData.map((book, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.title}</td>
                    <td>{book.genre}</td>
                    <td>{book.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
