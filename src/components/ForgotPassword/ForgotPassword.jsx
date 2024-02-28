import React from "react";

import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordSide">
        <form className="forgotPasswordForm">
          <h2 className="text-3xl font-semibold pb-5">Forgot Password</h2>
          <div className="inputField">
            <input type="email" placeholder="Email" required />
          </div>

          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            Send Code
          </button>
        </form>
      </div>
      <div className="forgotPasswordImgSide"></div>
    </div>
  );
}

export default ForgotPassword;
