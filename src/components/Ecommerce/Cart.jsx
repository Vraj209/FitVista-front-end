import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/cart/cartItems',{ withCredentials: true });
      setCartItems(response.data.cart.items);
      calculateTotalPrice(response.data.cart.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(total);
  };

  const removeItemFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/cart//removeItem/${productId}`,{ withCredentials: true });
      fetchCartItems(); // Refresh the cart items after removal
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const emptyCart = async () => {
    try {
      await axios.delete('http://localhost:3000/api/v1/cart/empty',{ withCredentials: true });
      setCartItems([]);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error emptying the cart:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart <FaShoppingCart className="inline mb-1" /></h1>
        <button onClick={emptyCart} className="text-red-600 hover:text-red-800 font-semibold">
          Empty Cart
        </button>
      </div>
      {cartItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-6 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-xl font-medium">{item.name}</h2>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeItemFromCart(item.id)} className="text-red-600 hover:text-red-800">
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
          <div className="p-6">
            <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 ease-in-out">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-800 text-xl">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
