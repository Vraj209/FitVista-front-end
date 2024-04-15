import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirects user to the home page
  };

  const handleContinueShopping = () => {
    navigate("/ecommerce"); // Redirects user to the shopping page
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-800 text-lg mb-6">
          Thank you for your purchase. Your order has been placed and is being
          processed. You will receive an email confirmation shortly.
        </p>
        <button
          onClick={handleBackToHome}
          className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Go to Home
        </button>
        <button
          onClick={handleContinueShopping}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Success;
