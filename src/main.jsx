import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordChange from "./pages/PasswordChange";
import SetNewPassword from "./pages/SetNewPassword";

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
  Failure,
  Profile,
  Services,
  SessionHome,
  SessionRoom,
  Success,
  TrainerDashboard,
  TrainerData,
  UserData,
  VideoDetail,
  VideoList,
  VideoUpdate,
  VideoUpload,
  ViewUser,
} from "./components";

import { AuthProvider } from "./contexts/AuthProvider";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EcommercePage from "./pages/EcommercePage";
import UserDashboardPage from "./pages/UserDashboardPage";
import BlogPage from "./pages/BlogPage";
import ViewBlog from "./components/Blog/ViewBlog";
import { Checkout } from "./components";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <Register /> },
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
  { path: "/ecommerce/checkout", element: <Checkout /> },
  { path: "/ecommerce/success", element: <Success /> },
  { path: "/ecommerce/failure", element: <Failure /> },

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

  { path: "/content/:videoId", element: <VideoDetail /> },
  { path: "/updatevideo/:videoId", element: <VideoUpdate /> },
  { path: "/upload", element: <VideoUpload /> },
  { path: "/videoList", element: <VideoList /> },

  { path: "/room", element: <SessionHome /> },
  { path: "/room/:roomId", element: <SessionRoom /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>*/}
      <RouterProvider router={router}></RouterProvider>
      {/*  </BrowserRouter>*/}
    </AuthProvider>
  </React.StrictMode>
);
