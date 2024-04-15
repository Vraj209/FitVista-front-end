import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";

import PasswordChange from "../pages/PasswordChange";
import SetNewPassword from "../pages/SetNewPassword";
import DashboardPage from "../pages/DashboardPage";
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
} from "../components";
import EditProductPage from "../pages/EditProductPage";
import ViewProductPage from "../pages/ViewProductPage";
import EcommercePage from "../pages/EcommercePage";
import UserDashboardPage from "../pages/UserDashboardPage";
import BlogPage from "../pages/BlogPage";
import ViewBlog from "../components/Blog/ViewBlog";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
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
