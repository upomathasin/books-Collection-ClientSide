import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContextProvider";
import { IoBookSharp } from "react-icons/io5";
export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser().then(() => alert("Sign out successful !"));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>

            <li>
              <Link to="/addBook">Add Book</Link>
            </li>

            <li>
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </div>
        <li className="btn btn-ghost text-xl">
          <div className="flex justify-center items-center text-center">
            <IoBookSharp className="me-2" />
            Books Collection
          </div>
        </li>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/addBook">Add Book</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <li className="btn btn-primary">
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li className="btn btn-primary">
            <button onClick={handleSignOut}>Logout</button>
          </li>
        )}
      </div>
    </div>
  );
}
