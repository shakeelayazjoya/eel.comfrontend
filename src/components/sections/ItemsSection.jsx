import React from "react";
import { RiShoppingCart2Line, RiHeartLine } from "react-icons/ri"; // Import icons from React Icons
import "./ItemsSection.css"; // Import custom CSS for hover effect
import camone from "../../assets/items/camone.jpg";
import camtwo from "../../assets/items/camtwo.jpg";
import camthree from "../../assets/items/camthree.jpg";
import camsix from "../../assets/items/camsix.jpg";
import camfive from "../../assets/items/camfive.jpg";
import laptop from "../../assets/items/laptop.jpg";
import handfree from "../../assets/items/handfree.jpg";
import sumsung from "../../assets/items/sumsung.jpg";
const ItemsSection = () => {
  const items = [
    {
      img: camone,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: camtwo,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: camthree,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: camsix,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: camfive,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: laptop,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: handfree,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      img: sumsung,
      title: "Shoes",
      badge: "NEW",
      description: "If a dog chews shoes whose shoes does he choose?",
    },

    // Add more items as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="py-3 sm_container">
        <h2 className="font-bold text-2xl">THE NEW ARRIVALS</h2>
        <p className="text-gray-700">
          Preorder now to receive exclusive deals & gifts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full shadow-xl relative group overflow-hidden"
          >
            <figure>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">{item.badge}</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end space-x-2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                <button className="btn btn-outline btn-primary cursor-pointer animate-move-in">
                  <RiShoppingCart2Line className="inline-block mr-2" />
                  Add to Cart
                </button>
                <button className="btn btn-outline btn-secondary cursor-pointer animate-move-in">
                  <RiHeartLine className="inline-block mr-2" />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsSection;
