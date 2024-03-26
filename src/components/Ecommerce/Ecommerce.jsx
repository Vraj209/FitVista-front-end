import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

function Ecommerce() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/product/getProducts",{withCredentials:true}
        );
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error in getting products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-800 text-xl font-bold leading-tight mr-8"
            >
              FitVista
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/ecommerce/cart"
              className="text-gray-800 text-xl font-normal leading-tight mr-4 flex items-center"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
            </Link>
            <Link
              to="/ecommerce/orders"
              className="text-gray-800 text-xl font-normal leading-tight flex items-center"
            >
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Orders
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow p-5 bg-gray-100 min-h-screen">
        <div className="flex items-center justify-center h-48 mb-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
          <h1 className="text-5xl font-bold text-white">Ecommerce Store</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Product Cards */}
          {Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product._id}
                className="relative flex flex-col justify-between border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h2>
                  <h3 className="text-xl mb-2 font-semibold text-indigo-600">
                    ${product.price}
                  </h3>
                  <p className="text-md mb-3 font-medium text-gray-700">
                    Category: {product.category}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.shortDescription}
                  </p>
                </div>
                <Link to={`/viewProduct/${product._id}`}>
                  <button className="mt-4 w-full px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-200 ease-in-out text-sm font-semibold">
                    View More
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
