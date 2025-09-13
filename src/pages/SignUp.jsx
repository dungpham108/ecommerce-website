import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 hover:underline">
              Log In
            </a>
          </p>
        </form>

        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 mt-4 rounded-lg hover:bg-red-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
