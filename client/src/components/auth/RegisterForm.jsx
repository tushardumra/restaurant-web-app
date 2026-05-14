import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const RegisterForm = ({ setIsLogin}) => {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>

      {/* Heading */}
      <div className="mb-8 text-center">

        <h2 className="text-3xl font-bold text-gray-900">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Join Foodie and enjoy delicious meals anytime.
        </p>

      </div>

      {/* Form */}
      <form className="space-y-6">

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
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>
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
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>
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
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>
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
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          Create Account
        </button>

      </form>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mt-8">

        Already have an account?{" "}

        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="text-orange-500 font-semibold hover:underline">
          Login
        </button>

      </p>

    </div>
  )
}

export default RegisterForm
