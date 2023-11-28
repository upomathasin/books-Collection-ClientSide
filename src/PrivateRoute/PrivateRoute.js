import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="h-min-screen w-full text-center flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  {
    !user && alert("Please Login first !");
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location }}
      ></Navigate>
    );
  }
}
