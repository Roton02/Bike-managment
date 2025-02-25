import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bikeBike.png";
import img from "../assets/login-img-2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center bg-[#2C293A]">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full flex bg-cover bg-center"
      >
        {/* Left Side Image (Hidden on Small Screens) */}
        <div className="flex-1 h-screen hidden md:block ">
          <img src={img} alt="Bike" className="h-full w-full object-cover  object-right" />
        </div>

        {/* Right Side Login Form */}
        <div className="w-full md:w-5/12 flex flex-col justify-center p-8 bg-[#111] bg-opacity-60 rounded-l-xl h-[70vh] my-auto">
          <h2 className="text-2xl font-bold text-center text-white">
            Hello! <br /> Login Here
          </h2>
          <form className="mt-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                className="w-full px-4 py-3 mt-2 border rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Password Field with Show/Hide */}
            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border rounded-lg bg-[#222] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-4 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-end text-gray-400 text-sm mt-2">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              SIGN IN →
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
