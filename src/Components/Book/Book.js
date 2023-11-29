import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";
import Swal from "sweetalert2";

export default function Book({ book }) {
  const { title, author, genre, date, details } = book;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDelete = async (book) => {
    //console.log("delete this book: ", book);

    await fetch(
      `https://books-collection-server-side.vercel.app/books/${user.email}/${book._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Book Deleted !");
      });
  };
  const handleUpdate = async (book) => {
    navigate(`/editBook/${book._id}`, { state: book });
  };

  const handleShowDetails = (book) => {
    navigate(`/book/details/${book._id}`, { state: book });
  };
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Book Name: {title}</h2>
        <h3>Author Name:{author}</h3>
        <p>Published Date:{date}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-secondary"
            onClick={() => handleShowDetails(book)}
          >
            Details
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(book)}
          >
            Update
          </button>
          <button className="btn btn-error" onClick={() => handleDelete(book)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
