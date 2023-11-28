import React from "react";
import { useLocation } from "react-router-dom";

export default function BookDetails() {
  const { state } = useLocation();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex  flex-col lg:flex-row ">
        <img
          src="https://i.ibb.co/d29wFJf/book-41635.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Book Description</h1>
          <div className="py-3">
            <h2 className="text-xl">Book Name: {state.title}</h2>
            <h2 className="text-xl">Author Name: {state.author}</h2>
            <h2 className="text-xl">Published Date: {state.date}</h2>
            <p className="text-xl">
              {" "}
              Details:
              {state.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
