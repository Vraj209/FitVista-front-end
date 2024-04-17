import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  console.log("user", userData);
  console.log("accessToken", accessToken);
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/cart/cartItems",
        {
          withCredentials: true,
        }
      );
      setCartItems(response.data.cart.items);
      calculateTotal(response.data.cart.items);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  const handleCheckout = async () => {
    // Placeholder for checkout logic
    alert("Proceeding to payment...");
    // Redirect to a success page or back to store
    navigate("/success");
  };

  const navigateToCart = async () => {
    navigate("/ecommerce/cart");
  };
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <h2 className="text-lg font-semibold">Your Information</h2>
            <div className="grid grid-cols-1 gap-y-4">
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="First Name"
                value={userData.firstName}
                required
              />
              <input
                className="p-2 border rounded"
                type="email"
                placeholder="Email"
                value={userData.email}
                required
              />
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Phone Number"
                required
              />
              <textarea
                className="p-2 border rounded"
                placeholder="Address"
                rows="4"
                required
              ></textarea>
            </div>

            <h2 className="text-lg font-semibold mt-8">Payment Details</h2>
            <div className="grid grid-cols-1 gap-y-4">
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Card Number"
                required
              />
              <div className="flex space-x-4">
                <input
                  className="p-2 border rounded flex-grow"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
                <input
                  className="p-2 border rounded flex-grow"
                  type="text"
                  placeholder="CVC"
                  required
                />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <ul className="mt-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xl font-bold">Total: ₹{totalPrice}</p>
            </div>
            <div className="flex gap-5">
              <button
                type="button"
                onClick={navigateToCart}
                className="mt-4  w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Go To Cart
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
