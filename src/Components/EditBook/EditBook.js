import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

export default function EditBook() {
  const { state } = useLocation();
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState({});

  console.log("state", state);
  const onSubmit = async (data) => {
    const { title, author, date, genre, details } = data;
    const updatedBook = {
      _id: state._id,
      addedBy: user.email,
      title: title ? title : state.title,
      author: author ? author : state.author,
      date: date ? date : state.date,
      genre: genre ? genre : state.genre,
      details: details ? details : state.details,
    };
    console.log(updatedBook);

    await fetch(
      `https://books-collection-server-side.vercel.app/books/${user.email}/${book._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Data Successfully Updated !",

          icon: "success",
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full h-full flex-col justify-around  lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">
            Update Book Details
          </h1>
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
                defaultValue={state.title}
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
                defaultValue={state.author}
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
                defaultValue={state.genre}
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
                defaultValue={state.date}
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
                defaultValue={state.details}
                {...register("details")}
                type="details"
                placeholder="Details"
                className="input input-bordered input-lg w-full "
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">
                <FaEdit></FaEdit>Edit Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
