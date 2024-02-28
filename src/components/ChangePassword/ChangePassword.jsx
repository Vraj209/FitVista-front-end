import React from "react";
import "./ChangePassword.css";
function ChangePassword() {
  return (
    <div className="ChangePasswordContainer">
      <div className="changePasswordImgSide"></div>
      <div className="ChangePasswordSide">
        <form className="ChangePasswordForm">
          <h2 className="text-3xl font-semibold">Change Password</h2>
          <div className="inputField">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="inputField">
            <input type="password" placeholder="Old Password" required />
          </div>
          <div className="inputField">
            <input type="password" placeholder="New Password" required />
          </div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
