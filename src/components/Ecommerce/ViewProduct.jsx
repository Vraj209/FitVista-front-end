import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/product/getProduct/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.log("Error in getting product", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-10">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex md:flex-row flex-col">
            {/* Left Side: Image Container */}
            <div
              className="md:w-1/2 h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>

            {/* Right Side: Product Details */}
            <div className="md:w-1/2 p-4 flex flex-col justify-between">
              {/* Price Tag at the Top */}
              <div className="flex justify-between items-center">
                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold bg-green-500 text-white py-1 px-3 rounded-full shadow-lg">
                  ${product.price}
                </span>
              </div>

              <div>
                <h3 className="text-3xl text-gray-900 font-bold mt-4">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-2">{product.shortDescription}</p>
                <div className="mt-4">
                  <span className="font-bold text-gray-900">Category:</span>{" "}
                  {product.category}
                </div>
                <div className="mt-4 mb-4">
                  <span className="font-bold text-gray-900">Description:</span>{" "}
                  {product.description}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-5">
                <button className="mb-2 sm:mb-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition ease-in-out duration-150">
                  <Link to="/ecommerce">Go Back</Link>
                </button>
                <button className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full transition ease-in-out duration-150">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
