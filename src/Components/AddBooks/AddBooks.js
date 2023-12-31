import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthContextProvider";
import Swal from "sweetalert2";

export default function AddBooks() {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  const onSubmit = async (data) => {
    const { title, author, date, genre, details } = data;
    const newBook = {
      addedBy: user.email,
      title: title,
      author: author,
      date: date,
      genre: genre,
      details: details,
    };
    await fetch(
      `https://books-collection-server-side.vercel.app/books/${user.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(newBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Book Added!",

          icon: "success",
        });

        const newBooks = [...books, data];
        setBooks(newBooks);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full h-full flex-col justify-around  lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Book</h1>
          </div>
          <div className="  min-w-[400px] shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  {...register("author")}
                  type="text"
                  placeholder="Author"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <input
                  {...register("genre")}
                  type="text"
                  placeholder="Genre"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Published Date</span>
                </label>
                <input
                  {...register("date")}
                  type="date"
                  placeholder="Published Year"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  {...register("details")}
                  type="details"
                  placeholder="Details"
                  className="input input-bordered input-lg w-full "
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
