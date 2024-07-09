import React from "react";
import "./Footer.css"; // Import your custom CSS for footer styling
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 flex flex-wrap">
        {/* Information */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-bold mb-4 text-white">INFORMATION</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="hover:text-gray-200">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-bold mb-4 text-white">MY ACCOUNT</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="hover:text-gray-200">
                My account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Order History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Frequently Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-bold mb-4 text-white">CATEGORIES</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="hover:text-gray-200">
                Decorative
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Kitchen utensils
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Chair & Bar stools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Sofas and Armchairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Interior lighting
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-bold mb-4 text-white">ABOUT US</h3>
          <p className="mb-4 text-gray-400 leading-relaxed">
            We are a team of designers and developers that create high quality
            Magento, Prestashop, Opencart.
          </p>
          <p className="text-gray-400">
            <span className="block mb-2">Address: maxcore tech sabza zar</span>
            <span>
              Email:{" "}
              <a
                href="mailto:Support@plazathemes.com"
                className="text-white hover:text-gray-200"
              >
                Shakeelayaz954@gmail.com
              </a>
            </span>
          </p>
          {/* Social Icons */}
          <div className="flex mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-2 transition-colors duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-2 transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-2 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-2 transition-colors duration-300"
            >
              <FaGoogle className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
