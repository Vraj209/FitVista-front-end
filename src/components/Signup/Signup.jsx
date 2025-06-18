import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

import { useRegisterMutation } from "../../auth/useLoginMutation";
function Signup() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useRegisterMutation();
  const signup = (data) => {
    mutate(data);
    navigate("/signin");
  };

  return (
    <>
      <Toaster className="react-hot-toast-container" />
      <div className="registerContainer">
        <div className="registerSide">
          <form className="registerForm" onSubmit={handleSubmit(signup)}>
            <div className="inputField">
              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
                type="text"
              />
              {errors.firstName && (
                <p className="text-red-500">please enter valid name</p>
              )}
            </div>
            <div className="inputField">
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500">please enter valid name</p>
              )}
            </div>
            <div className="inputField">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5"
                {...register("role")}
              >
                <option value="trainee" selected>
                  Trainee
                </option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="inputField">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">please enter valid email</p>
              )}
            </div>

            <div className="inputField">
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">please enter valid password</p>
              )}
            </div>
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              type="submit"
            >
              {isPending ? "Processing" : "Sign Up"}
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
