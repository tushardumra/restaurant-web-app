import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

const LoginForm = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setServerError("");
      setErrors({});

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            identifier: formData.identifier,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      // HANDLE ERRORS 
      if (!response.ok) {
        if (data.errors) {
          const formattedErrors = {};

          data.erros.forEach(err => {
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

      // Clearing form input fields
      setFormData({
        identifier: "",
        password: "",
      });

      // Clearing old validation messages
      setErrors({});

    } catch (error) {
      console.log(error);
      setServerError("Something went wrong");
    } finally {
      setLoading(false);
    }
    console.log(formData);
  }

  return (
    <div>
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mt-2">
          Login to continue ordering delicious food.
        </p>
      </div>

      {serverError && (
        <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl mb-4 text-sm">
          {serverError}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email or Username
          </label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {
            errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier}
              </p>
            )
          }
        </div>

        {/* Password Field */}
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
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-orange-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300 mb-2"
        >
          Login
        </button>
      </form>

      {/* Bottom Text */}
      <p>
        Don&apos;t have an account?{" "}

        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-orange-500 font-semibold hover:underline">
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
