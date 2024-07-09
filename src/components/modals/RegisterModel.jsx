import React from "react";

function RegisterModal({ onClose, onSwitchToLogin }) {
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-center self-center z-10">
          <div className="mx-auto rounded w-100">
            <div className="mb-4 text-center">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up</h3>
              <p className="text-gray-500 mt-2">Create a new account.</p>
            </div>
            <div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Name
                </label>
                <input
                  className="w-full text-black px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="space-y-2 mb-3">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className="w-full text-black px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2 mb-3">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-black px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center flex justify-center mt-5">
                <button
                  type="submit"
                  className="flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 px-4 py-2 rounded-full tracking-wide font-semibold text-sm shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center items-center mt-3">
                <p className="text-sm text-gray-700">
                  Already have an account?&nbsp;&nbsp;&nbsp;
                  <button
                    className="hover:text-gray-900 cursor-pointer font-bold"
                    onClick={onSwitchToLogin}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2021-2024
                <a
                  href="https://codepen.io/uidesignhub"
                  rel=""
                  target="_blank"
                  title="Ajimon"
                  className="text-green hover:text-green-500"
                >
                  EELCom
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default RegisterModal;
