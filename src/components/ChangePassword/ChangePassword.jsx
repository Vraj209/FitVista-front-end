import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    newPassword: "",
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changePasswordHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/changePassword",
        user
      );
      console.log("Response from changePassword", response.data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Error in changePassword", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.newPassword.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);
  return (
    <div className="ChangePasswordContainer">
      <div className="changePasswordImgSide"></div>
      <div className="ChangePasswordSide">
        <form className="ChangePasswordForm" onSubmit={changePasswordHandler}>
          <h2 className="text-3xl font-semibold">
            {loading ? "Procressing" : "Change Password"}
          </h2>
          <div className="inputField">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="inputField">
            <input
              type="password"
              placeholder="Old Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="inputField">
            <input
              type="password"
              placeholder="New Password"
              value={user.newPassword}
              onChange={(e) =>
                setUser({ ...user, newPassword: e.target.value })
              }
              required
            />
          </div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            {disable ? "Fill all fields" : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
