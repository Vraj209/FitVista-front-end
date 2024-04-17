import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash, MinusCircle, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold total price
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]); // Recalculate total when cart items change

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "/api/v1/cart/cartItems",
        {
          withCredentials: true,
        }
      );
      setCartItems(response.data.cart.items);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2)); // Sets the total price, formatted to 2 decimal places
  };

  const updateItemQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      console.log("Attempt to reduce quantity to less than 1 prevented.");
      return; // Prevents the quantity from being reduced below 1
    }
    try {
      console.log("Updating quantity for item:", itemId, "to:", newQuantity);
      const response = await axios.patch(
        `/api/v1/cart/updateItem/${itemId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );
      console.log("Quantity updated, server response:", response.data);
      fetchCartItems(); // Refresh the cart items
    } catch (error) {
      console.error("Failed to update item quantity:", error);
      alert("Failed to update quantity");
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      await axios.delete(
        `/api/v1/cart/removeItem/${itemId}`,
        {
          withCredentials: true,
        }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const emptyCart = async () => {
    try {
      await axios.delete(`/api/v1/cart/empty`, {
        withCredentials: true,
      });
      setCartItems([]);
    } catch (error) {
      console.error("Failed to empty cart:", error);
    }
  };

  const navigateToCheckOut = () => {
    navigate("/ecommerce/checkout"); // Adjust the route as necessary
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="px-6 py-4 flex justify-between items-center border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>${item.price}</p>
                      <div className="flex items-center">
                        <MinusCircle
                          className="cursor-pointer mr-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        />
                        <span>{item.quantity}</span>
                        <PlusCircle
                          className="cursor-pointer ml-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove This Product
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center p-6">
              <p className="text-xl">Total: ${totalPrice}</p>
              <div>
                <button
                  onClick={emptyCart}
                  className="mb-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Empty Cart
                </button>
                <button
                  onClick={navigateToCheckOut}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export { Cart };
