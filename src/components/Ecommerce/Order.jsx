import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Order({ orderNumber }) {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`/api/v1/order/getOrder/${orderNumber}`);
                setOrder(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch order details');
                setLoading(false);
                console.error(err);
            }
        };

        fetchOrder();
    }, [orderNumber]);

    if (loading) return <p>Loading order details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-gray-100 py-10 min-h-screen">
            <div className="container mx-auto max-w-4xl px-6">
                <h1 className="text-2xl font-bold mb-4">Order Details</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold">Products Purchased</h2>
                    <ul>
                        {order.products.map(product => (
                            <li key={product.id} className="flex justify-between items-center py-3 border-b">
                                <div className="flex items-center">
                                    <img src={product.imageSrc} alt={product.name} className="h-16 w-16 rounded object-cover mr-4" />
                                    <div>
                                        <p className="font-bold">{product.name}</p>
                                        <p className="text-sm">{product.color}</p>
                                        <p className="text-sm">Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">{product.price}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <p className="text-lg font-bold">Total: ₹{order.total}</p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Order Information</h2>
                        <p>Order Number: {order.orderNumber}</p>
                        <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Shipping Information</h2>
                        <p>{order.shippingInfo.name}</p>
                        <p>{order.shippingInfo.address}</p>
                        <p>{order.shippingInfo.phone}</p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Payment Information</h2>
                        <p>Card Ending: {order.paymentInfo.lastFourDigits}</p>
                        <p>Expires: {order.paymentInfo.expiration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
