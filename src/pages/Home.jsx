import React from "react";
import HeroSection from "../components/sections/Hero";
import CardSection from "../components/sections/CardSection";
import ProductSection from "../components/sections/ProductSection";
import ItemsSection from "../components/sections/ItemsSection";
import MicSection from "../components/sections/MicSection";
import BestItemSection from "../components/sections/BestItemSection";
import BlogsSection from "../components/sections/BlogsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <ProductSection />
      <ItemsSection />
      <MicSection />
      <BestItemSection />
      <BlogsSection />
    </div>
  );
};

export default HomePage;
