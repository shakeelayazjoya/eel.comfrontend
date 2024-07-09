import React from "react";
import watch from "../../assets/bgimages/watch.png";
import appliance from "../../assets/bgimages/appliance.png";

const HeroSection = () => {
  return (
    <>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src={watch} alt="watch" className="w-full h-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src={appliance}
            alt="appliance"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
