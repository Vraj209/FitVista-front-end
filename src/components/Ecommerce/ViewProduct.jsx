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
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-grow justify-center">
        <div className="flex-grow p-5 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto py-10">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              {/* Increase the height of the image container */}
              <div
                className="bg-cover bg-center h-96 p-4"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="flex justify-end">
                  <span className="text-lg text-white bg-indigo-600 hover:bg-indigo-500 font-bold py-2 px-4 rounded-full">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl text-gray-900 font-bold">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.shortDescription}</p>
              </div>
              <div className="p-4 border-t border-gray-200">
                <span className="font-bold text-gray-900">Category:</span>{" "}
                {product.category}
              </div>

              <div className="p-4 border-t border-b border-gray-200">
                <span className="font-bold text-gray-900">Description:</span>{" "}
                {product.description}
              </div>
              <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <button className="w-1/4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition ease-in-out duration-150">
                  <Link to="/ecommerce">Go Back</Link>
                </button>
                <button className="w-1/4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-150">
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
