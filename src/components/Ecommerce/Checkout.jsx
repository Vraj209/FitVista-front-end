import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Checkout() {
  const { auth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
  });
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "/api/v1/cart/cartItems",
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not yet loaded.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      alert("Error in payment: " + error.message);
      return;
    }

    const postData = {
      ...userInfo,
      total: totalPrice,
      paymentMethodId: paymentMethod.id,
      items: cartItems.map((item) => ({
        prodId: item.id,
        quantity: item.quantity,
      })),
      userid: auth.userData._id, // Assume that userID is available from the auth context
    };

    try {
      const response = await axios.post(
        "/api/v1/payment/checkout",
        postData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Payment Intent:", response.data);
      alert("Payment Successful!");
      navigate("/success");
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment processing failed. Try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6" onSubmit={handleCheckout}>
            <h2 className="text-lg font-semibold">Your Information</h2>
            <div className="grid grid-cols-1 gap-y-4">
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="First Name"
                name="FirstName"
                value={userInfo.FirstName}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Last Name"
                name="LastName"
                value={userInfo.LastName}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 border rounded"
                type="email"
                placeholder="Email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                required
              />
              <textarea
                className="p-2 border rounded"
                placeholder="Address"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={userInfo.postalCode}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="City"
                name="city"
                value={userInfo.city}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 border rounded"
                type="text"
                placeholder="Province"
                name="province"
                value={userInfo.province}
                onChange={handleChange}
                required
              />
            </div>
            <h2 className="text-lg font-semibold mt-8">Payment Details</h2>
            <CardElement className="p-2 border rounded" />
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
                onClick={() => navigate("/ecommerce/cart")}
                className="mt-4 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Go To Cart
              </button>
              <button
                type="submit"
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
