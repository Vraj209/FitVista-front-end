import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Ecommerce() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/product/getProducts"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error in getting products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-5 sm:ml-64 bg-gray-100 min-h-screen">
        <div className="flex items-center justify-center h-48 mb-8 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
          <p className="text-4xl font-bold text-white">Ecommerce Store</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {console.log("products", products)}
          {Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product._id}
                className="border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white dark:bg-white-800"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray">
                  {product.name}
                </h2>
                <h3 className="text-xl mb-3 text-indigo-600">
                  ${product.price}
                </h3>
                <h3 className="text-md mb-2 text-gray-700 dark:text-gray-700">
                  {product.category}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  {product.shortDescription}
                </p>
                <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-200 ease-in-out text-sm font-semibold">
                  <Link to={`/viewProduct/${product._id}`}>View More</Link>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
