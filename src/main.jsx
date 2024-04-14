import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordChange from "./pages/PasswordChange";
import SetNewPassword from "./pages/SetNewPassword";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import {
  AboutUs,
  AddBlog,
  AddProduct,
  AllBlogs,
  AllProductList,
  Cart,
  ContactUs,
  EditBlog,
  Profile,
  Services,
  TrainerDashboard,
  TrainerData,
  UserData,
  ViewUser,
} from "./components";
import EditProductPage from "./pages/EditProductPage";
import EcommercePage from "./pages/EcommercePage";
import ViewProductPage from "./pages/ViewProductPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import BlogPage from "./pages/BlogPage";
import ViewBlog from "./components/Blog/ViewBlog";
// import { AuthProvider } from "./contexts/UserContext";
import { UserProvider } from "./contexts/UserContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <Login /> },
  { path: "/changePassword", element: <PasswordChange /> },
  { path: "/forgotPassword", element: <SetNewPassword /> },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  { path: "/addProduct", element: <AddProduct /> },
  { path: "/allProduct", element: <AllProductList /> },
  { path: "/addBlog", element: <AddBlog /> },
  { path: "/allBlogs", element: <AllBlogs /> },
  { path: "/editProduct/:id", element: <EditProductPage /> },
  { path: "/viewProduct/:id", element: <ViewProductPage /> },
  { path: "/ecommerce", element: <EcommercePage /> },
  { path: "/ecommerce/cart", element: <Cart /> },
  { path: "/userData", element: <UserData /> },
  { path: "/user/:id", element: <ViewUser /> },
  { path: "/trainerData", element: <TrainerData /> },
  { path: "/UserDashboard", element: <UserDashboardPage /> },
  { path: "/trainerDashboard", element: <TrainerDashboard /> },
  // Blogs
  { path: "/blogs", element: <BlogPage /> },
  { path: "/blog/:id", element: <ViewBlog /> },
  {
    path: "/edit-blog/:id",
    element: <EditBlog />,
  },
  // services
  { path: "/services", element: <Services /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
