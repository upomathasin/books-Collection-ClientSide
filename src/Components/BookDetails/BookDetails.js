import React from "react";
import { useLocation } from "react-router-dom";

export default function BookDetails() {
  const { state } = useLocation();
  return (
    <div>
      BookDetails Description:{state.details}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              This book is added By you !
            </h1>
            <p className="mb-5">{state.details}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
