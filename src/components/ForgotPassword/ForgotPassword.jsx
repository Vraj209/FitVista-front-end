import React, { useState, useEffect } from "react";
import "./ForgotPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    console.log("Forgot Password", user);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/forgotPassword",
        user
      );
      console.log("Response from forgotPassword", response.data);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      console.log("Error in forgotPassword", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordSide">
        <form className="forgotPasswordForm" onSubmit={forgotPasswordHandler}>
          <h2 className="text-3xl font-semibold pb-5">
            {loading ? "Processing" : "Forgot Password"}
          </h2>
          <div className="inputField">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ email: e.target.value })}
              required
            />
          </div>

          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            {disable ? "Processing" : "Forgot Password"}
          </button>
        </form>
      </div>
      <div className="forgotPasswordImgSide"></div>
    </div>
  );
}

export default ForgotPassword;
