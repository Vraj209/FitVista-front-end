import React, { useState, useEffect } from "react";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";
function Dashboard() {
  const [numberOfProduct, setNumberOfProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/product/getProducts`
        );
        setNumberOfProduct(response.data.products.length);
      } catch (error) {
        console.log("Error in getting product", error);
      }
    };
    fetchProduct();
  }, [numberOfProduct]);
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-rose-600">
            <p className="text-5xl text-white">Dashboard</p>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold">Ecommerce</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-orange-400">
              <p className="text-3xl  dark:text-white py-2">
                {numberOfProduct}
              </p>
              <p className="text-2xl text-gray-400 dark:text-white">
                Online Products
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-green-500">
              <Link
                to="/allProduct"
                className="text-2xl text-white dark:text-white"
              >
                All Products List
              </Link>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-yellow-400">
              <Link
                to="/addProduct"
                className="text-2xl text-white dark:text-white"
              >
                Add Product
              </Link>
            </div>
          </div>
          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold">Blog</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-purple-500">
              <p className="text-3xl  dark:text-white py-2">3</p>
              <p className="text-2xl text-gray-400 dark:text-white">
                Published Blogs
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-fuchsia-500">
              <Link
                to="/allBlogs"
                className="text-2xl text-white dark:text-white"
              >
                All Blogs List
              </Link>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-blue-500">
              <Link
                to="/addBlog"
                className="text-2xl text-white dark:text-white"
              >
                Add Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
