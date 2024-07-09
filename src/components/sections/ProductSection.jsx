import React from "react";
import mobile from "../../assets/bgimages/mi.jpg";
import headphone from "../../assets/bgimages/headphone.jpg";
import handfree from "../../assets/bgimages/handfree.jpg";
import "./ProductSection.css"; // Import the custom CSS

const ProductSection = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-center items-center">
        <div className="relative flex-1 overflow-hidden">
          <img
            src={mobile}
            alt="Mobile"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover-effect"></div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <img
            src={headphone}
            alt="Headphone"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover-effect"></div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <img
            src={handfree}
            alt="Handfree"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover-effect"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
