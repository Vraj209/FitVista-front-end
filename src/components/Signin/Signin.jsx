import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../../context/UserContext";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const { login } = useUser();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signin",
        user
      );
      console.log("Response from signin", response.data);
      // const { token, user: userData } = response.data;
      // login({ token, userData });
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Error in signin", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);
  return (
    <div className="loginContainer">
      <div className="imgSide"></div>
      <div className="loginSide">
        <form className="loginForm" onSubmit={signin}>
          <h2 className="text-3xl font-semibold">
            {loading ? "Procressing" : "Sign in"}
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
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            {disable ? "Please Fill your details" : "Login"}
          </button>
          <p className="signupText">
            Not registered yet? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
