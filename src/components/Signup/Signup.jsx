import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        user
      );
      console.log("Response from signup", response.data);
      toast.success("Signup Successfully");
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      console.log("Error in signup", error);
      toast.error("Error in signup");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.role.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  return (
    <>
      <Toaster className="react-hot-toast-container" />
      <div className="registerContainer">
        <div className="registerSide">
          <form className="registerForm" onSubmit={signup}>
            <h2 className="text-3xl font-semibold">
              {loading ? "Procressing" : "Sign up"}
            </h2>
            <div className="inputField">
              <input
                type="text"
                placeholder="First Name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="inputField">
              <input
                type="text"
                placeholder="Last Name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                required
              />
            </div>
            <div className="inputField">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                required
              >
                <option value="" disabled selected>
                  Select your role
                </option>
                <option value="trainee">Trainee</option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
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
              {disable ? "Please Fill your details" : "Sign Up"}
            </button>
            <p className="signinText">
              Already registered? <Link to="/signin">Login Here!</Link>
            </p>
          </form>
        </div>
        <div className="imageSide"></div>
      </div>
    </>
  );
}

export default Signup;
