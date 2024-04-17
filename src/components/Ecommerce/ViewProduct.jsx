import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

function ViewProduct() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `/api/v1/product/getProduct/${id}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
            },
          }
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id, accessToken]);

  if (!product) return <div className="text-center py-8">Loading...</div>;

  const addToCartHandler = async () => {
    try {
      console.log("product", product);
      const product_Data = {
        id: product._id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        shortDescription: product.shortDescription,
        image: product.image,
      };
      const response = await axios.post(
        `/api/v1/cart/addItemtoCart`,
        {
          product_Data, // include other necessary fields
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      alert("Product added to cart successfully!");
      navigate("/ecommerce/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="bg-gray-200 text-center py-12">
            <img
              src={product.image}
              alt={product.name}
              className="inline-block max-h-96 mx-auto"
              style={{ maxHeight: "450px" }}
            />
          </div>

          {/* Product Details */}
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.shortDescription}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price}
              </span>
              <span className="font-semibold">
                Category: {product.category}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <Link
                to="/ecommerce"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                <FaArrowLeft className="mr-2" /> Go Back
              </Link>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={addToCartHandler}
              >
                <FaCartPlus className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
