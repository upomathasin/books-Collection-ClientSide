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
    await fetch(`http://localhost:5000/books/:${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/MZNkrSV/Book-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Add Your Favorite Books</h1>
            <p className="mb-5">
              Add your favorite book here.Provide title, author, genre,
              publication date of your book and add this in our collection.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

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
                  className="input input-bordered"
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
