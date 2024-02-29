import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordChange from "./pages/PasswordChange";
import SetNewPassword from "./pages/SetNewPassword";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <Login /> },
  { path: "/changePassword", element: <PasswordChange /> },
  { path: "/forgotPassword", element: <SetNewPassword /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
