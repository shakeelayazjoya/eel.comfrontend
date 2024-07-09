import React from "react";
import shipping from "../../assets/icone/shippnig.png";

const CardSection = () => {
  return (
    <div className="sm_container mx-auto">
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-md">
          <img src={shipping} alt="Shipping Icon" className="mb-3" />
          <h4 className="text-lg font-bold">FREE SHIPPING</h4>
          <p className="text-center">
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-md">
          <img src={shipping} alt="Shipping Icon" className="mb-3" />
          <h4 className="text-lg font-bold">FREE SHIPPING</h4>
          <p className="text-center">
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-md">
          <img src={shipping} alt="Shipping Icon" className="mb-3" />
          <h4 className="text-lg font-bold">FREE SHIPPING</h4>
          <p className="text-center">
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-md">
          <img src={shipping} alt="Shipping Icon" className="mb-3" />
          <h4 className="text-lg font-bold">FREE SHIPPING</h4>
          <p className="text-center">
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
