import { Link } from "react-router-dom";
import "./Signin.css";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../auth/useLoginMutation";

function Signin() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending, error } = useLoginMutation();

  const signin = (data) => {
    mutate(data);
  };

  return (
    <div className="loginContainer">
      <div className="imgSide"></div>
      <div className="loginSide">
        <form className="loginForm" onSubmit={handleSubmit(signin)}>
          <div className="inputField">
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Email"
              type="email"
            />
            {errors.email && <p>Email is required and must be valid</p>}
          </div>
          <div className="inputField">
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
            />
            {errors.password && <p>Password is required</p>}
          </div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="submit"
          >
            {isPending ? "Processing" : "Login"}
          </button>
          {error && <p className="text-red-500">Login failed</p>}
          <p className="signupText">
            Not registered yet? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
