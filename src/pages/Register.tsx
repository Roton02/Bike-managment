import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // React Icons for eye toggle
import bg from "../assets/bikeBike.png";
import img from "../assets/login-img-2.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="h-screen bg-[#2C293A] flex items-center justify-center ">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full      h-full  flex flex-col md:flex-row-reverse bg-cover bg-center  overflow-hidden shadow-lg"
      >
        {/* Left Side Image */}
        <div className="flex-1 h-64 md:h-auto hidden md:block">
          <img src={img} alt="Bike" className="h-full w-full object-cover object-left" />
        </div>

        {/* Right Side Register Form */}
        <div className="w-full md:w-5/12 flex flex-col justify-center p-8 bg-[#111] bg-opacity-60 rounded-r-xl max-h-[70%] my-auto">
          <h2 className="text-2xl font-bold text-center text-white">
            Hello !<br /> Register Now
          </h2>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-4 top-5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mt-4 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirm Password"
                required
              />
              <span
                className="absolute right-4 top-5 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-[#1f7b64] flex items-center justify-center"
            >
              SIGN UP →
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400">
            Already have an account? {" "}
            <Link to={"/login"} className="text-red-500 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
