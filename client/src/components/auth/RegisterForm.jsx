import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const RegisterForm = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [serverError, setServerError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error while typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErros = {};

    //Username validation
    if (!formData.username.trim()) {
      newErros.username = "Username is required";
    }

    //Email validation
    if (!formData.email.trim()) {
      newErros.email = "Email is required";
    }

    //Password validation
    if (!formData.password) {
      newErros.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErros.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErros.confirmPassword = "Passwords do not match";
    }

    // Set errors
    setErrors(newErros);

    // Stop submit if errors exist
    if (Object.keys(newErros).length > 0) {
      return;
    }

    
    try {
      setLoading(true);
      setServerError("");
      setSuccessMessage("");

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      // HANDLE BACKEND VALIDATION ERRORS
      if (!response.ok) {
      
        if (data.errors) {
          const formattedErrors = {};

          data.errors.forEach((err) => {
            formattedErrors[err.path] = err.msg;
          });

          setErrors(formattedErrors);
        } else {
          setServerError(data.message);
        }

        return;
      }

      // SUCCESS 
      console.log(data);

      setSuccessMessage("Registration successful!")

      // Clearing form input fields
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

      // Clearing old validation messages
      setErrors({});

      setTimeout(() => {
        setIsLogin(true);
      }, 1000);
      
    } catch (error) {

      console.log(error);
      setServerError("Something went wrong");
    
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>

        <p className="text-gray-500 mt-2">
          Join Foodie and enjoy delicious meals anytime.
        </p>
      </div>

      {
        serverError && (
          <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm">
            {serverError}
          </div>
        )
      }

      {successMessage && (
        <div className="bg-green-100 text-green-600 px-4 py-3 rounded-xl mb-6 text-sm">
        {successMessage}
        </div>
        )}
       
      {/* {
        successMessage && (
          <div className="bg-green-100 text-green-600 px-4 py-3 rounded-xl mb-6 text-sm">
            {successMessage}
          </div>
        )
      } */}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm mt-2">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          {loading ? "Create Account..." : "Create Account"}
        </button>
      </form>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mt-8">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-orange-500 font-semibold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
