import React from "react";
import { useForm } from "react-hook-form";

export default function AddBooks() {
  const { register } = useForm();
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
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
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
            <form className="card-body">
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
                  type="date"
                  placeholder="Author"
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
