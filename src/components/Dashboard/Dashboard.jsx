import React, { useState, useEffect, useContext } from "react";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";

function Dashboard() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;

  const [numberOfProduct, setNumberOfProduct] = useState();
  const [numberOfActiveUser, setNumberOfActiveUser] = useState();
  const [numberOfTotalUsers, setNumberOfTotalUsers] = useState();
  const [numberOfBlogs, setNumberOfBlogs] = useState();
  const [activeTrainer, setActiveTrainer] = useState();
  const [totalTrainer, setTotalTrainer] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/product/getProducts`,
          {
            withCredentials:true,
            headers: {
              Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
            },
          }
        );
        setNumberOfProduct(response.data.products.length);
      } catch (error) {
        console.log("Error in getting product", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/users/totalUser`,
        {
          withCredentials:true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      let users = response.data.users;
      console.log("user", users);
      console.log(users);
      setNumberOfTotalUsers(
        users.filter((user) => {
          return user.role === "trainee";
        }).length
      );
      setNumberOfActiveUser(
        users.filter((user) => {
          return user.role == "trainee" && user.status === "active";
        }).length
      );
      setActiveTrainer(
        users.filter((user) => {
          return user.role === "trainer" && user.status === "active";
        }).length
      );
      setTotalTrainer(
        users.filter((user) => {
          return user.role === "trainer";
        }).length
      );
    };
    fetchUser();
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/getBlogs`,
          {
            withCredentials:true,
            headers: {
              Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
            },
          }
        );
        let blogs = response.data.blogs;
        setNumberOfBlogs(blogs.length);
      } catch (error) {
        console.log("Error in getting blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-blue-100">
            <p className="text-5xl font-bold text-gray-800">Dashboard</p>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">Ecommerce</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-blue-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {numberOfProduct}
              </p>
              <p className="text-xl text-gray-600">Online Products</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-green-200 shadow">
              <Link
                to="/allProduct"
                className="text-xl text-green-600 font-semibold"
              >
                All Products List
              </Link>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-yellow-200 shadow">
              <Link
                to="/addProduct"
                className="text-xl text-yellow-600 font-semibold"
              >
                Add Product
              </Link>
            </div>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">Blog</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-purple-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {numberOfBlogs}
              </p>
              <p className="text-xl text-gray-600">Published Blogs</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-pink-200 shadow">
              <Link
                to="/allBlogs"
                className="text-xl text-pink-600 font-semibold"
              >
                All Blogs List
              </Link>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-indigo-200 shadow">
              <Link
                to="/addBlog"
                className="text-xl text-indigo-600 font-semibold"
              >
                Add Blog
              </Link>
            </div>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">User</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-lime-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {numberOfActiveUser}
              </p>
              <p className="text-xl text-gray-600">Active User</p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-yellow-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {numberOfTotalUsers}
              </p>
              <p className="text-xl text-gray-600">Total User</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-emerald-200 shadow">
              <Link
                to="/userData"
                className="text-xl text-emerald-600 font-semibold"
              >
                User Data
              </Link>
            </div>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">Trainer</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-amber-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {activeTrainer}
              </p>
              <p className="text-xl text-gray-600">Active Trainer</p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-amber-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {totalTrainer}
              </p>
              <p className="text-xl text-gray-600">Total Trainer</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-lg bg-sky-200 shadow">
              <Link
                to="/trainerData"
                className="text-xl text-sky-600 font-semibold"
              >
                Trainer Data
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
