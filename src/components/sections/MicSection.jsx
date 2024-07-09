import React from "react";
import laptop from "../../assets/bgimages/mac.jpg";
import girls from "../../assets/bgimages/girls.jpg";

const MicSection = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full lg:w-1/2 group">
        <img src={laptop} alt="Laptop" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-bold">Laptop Image</p>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 group">
        <img src={girls} alt="Girls" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-bold">HeadPhone Image</p>
        </div>
      </div>
    </div>
  );
};

export default MicSection;
