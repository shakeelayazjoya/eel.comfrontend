import React, { useState } from "react";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>

        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-center bg-green-400 hover:bg-green-500 text-gray-100 px-4 py-2 rounded-full tracking-wide font-semibold text-sm shadow-lg cursor-pointer transition ease-in duration-500"
          >
            Send email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
