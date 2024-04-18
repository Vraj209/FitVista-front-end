import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { auth, setAuth } = useContext(AuthContext);
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
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Response from signin:", response.data);
      const userData = response.data.data;
      const { token } = response.data;
      console.log("token from signin", token); // Renaming destructured variable to userData
      console.log("data", userData);

      setAuth({ userData: userData, accessToken: token });

      setLoading(false);
      navigate("/");
    } catch (error) {
      if (!error?.response) {
        console.log("Error in signin", error);
      } else if (error?.response?.status === 400) {
        console.log("Missing email or password");
      } else if (error?.response?.status === 401) {
        console.log("Unauthorized user");
      } else {
        console.log("Login Faild", error);
      }
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
