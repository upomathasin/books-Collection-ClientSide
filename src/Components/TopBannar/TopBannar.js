import React from "react";
import { Link } from "react-router-dom";

export default function TopBannar() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/MZNkrSV/Book-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <span className="text-primary">Book Collection</span>
          </h1>
          <p className="mb-5 text-lg text-white">
            Add your favorite book here.Provide title, author, genre,
            publication date of your book and add this in our collection.
          </p>

          <button className="btn btn-primary text-black">
            <Link to="/login">Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
