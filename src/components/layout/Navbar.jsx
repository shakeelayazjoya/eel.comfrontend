import React, { useState } from "react";
import { Link } from "react-router-dom";
import { topMenu } from "../../utils/menu";
import ELLlogo from "../../assets/EEL-LOGO.png";
import { FaCartPlus } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import RegisterModal from "../modals/RegisterModel";
import LoginModal from "../modals/LoginSection";

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false); // Close register modal if open
  };

  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false); // Close login modal if open
  };

  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <div className="px-5 py-1 bg-slate-800 text-white flex justify-between items-center">
      <div>
        <img src={ELLlogo} alt="EEL logo" className="w-28" />
      </div>
      <div>
        <ul className="flex gap-6">
          {topMenu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer flex items-center justify-center gap-1 hover:text-green-400"
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-3">
          <FaCartPlus className="text-2xl cursor-pointer hover:text-red-600" />
          <GrFavorite className="text-2xl cursor-pointer hover:text-red-600" />
        </div>
        <button
          className="px-4 py-1 rounded bg-white text-black font-mono text-xl"
          onClick={openLoginModal}
        >
          Login
        </button>
        {isLoginModalOpen && (
          <LoginModal
            onClose={closeLoginModal}
            onSwitchToRegister={openRegisterModal}
          />
        )}
        {isRegisterModalOpen && (
          <RegisterModal
            onClose={closeRegisterModal}
            onSwitchToLogin={openLoginModal}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
