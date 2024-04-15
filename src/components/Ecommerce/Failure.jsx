import React from 'react';
import { useNavigate } from 'react-router-dom';

function Failure() {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate("/ecommerce/checkout");  // Sends the user back to the previous page to retry
    };

    const handleBackToHome = () => {
        navigate('/ecommerce');  // Redirects user to the home page
    };

    return (
        <div className="bg-gray-100 py-10 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Transaction Failed</h1>
                <p className="text-gray-800 text-lg mb-6">We encountered an issue while processing your transaction. Please try again or contact support if the problem persists.</p>
                <button
                    onClick={handleRetry}
                    className="mb-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Retry
                </button>
                <button
                    onClick={handleBackToHome}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default Failure;
