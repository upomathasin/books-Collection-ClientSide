import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import Books from "./Components/Books/Books";
import Main from "./Layout/Main";
import AuthContextProvider from "./Provider/AuthContextProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddBooks from "./Components/AddBooks/AddBooks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        { path: "/books", element: <Books></Books> },
        {
          path: "/addBook",
          element: (
            <PrivateRoute>
              <AddBooks></AddBooks>
            </PrivateRoute>
          ),
        },

        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
