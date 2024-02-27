import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
  return (
    <div className="loginContainer">
      <div className="imgSide"></div>
      <div className="loginSide">
        <form className="loginForm">
          <h2 className="text-3xl font-semibold">Sign In</h2>
          <div className="inputField">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="inputField">
            <input type="password" placeholder="Password" required />
          </div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            Login
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
