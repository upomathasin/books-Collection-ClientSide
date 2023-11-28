import React from "react";

export default function Book({ book }) {
  const { title, author, genre, date } = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
