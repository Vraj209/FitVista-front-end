import React from "react";
import { Link } from "react-router-dom";

import "./Signup.css";
function Signup() {
  return (
    <div className="registerContainer">
      <div className="registerSide">
        <form className="registerForm">
          <h2 className="text-3xl font-semibold">Sign Up</h2>
          <div className="inputField">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="inputField">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="inputField">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5"
              required
            >
              <option value="" disabled selected>
                Select your role
              </option>
              <option value="trainer">Trainer</option>
              <option value="trainee">Trainee</option>
              <option value="admin">Admin</option>
            </select>
          </div>
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
            Register
          </button>
          <p className="signinText">
            Already registered? <Link to="/signin">Login Here!</Link>
          </p>
        </form>
      </div>
      <div className="imageSide"></div>
    </div>
  );
}

export default Signup;
