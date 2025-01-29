import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[800px] bg-red-500 relative">
      <img
        src="/products/blur_bg.png"
        alt="products"
        className="w-full h-full object-cover"
      />
      <img
        src="/products/smartmatic.png"
        alt="products"
        className="w-[874.67px] h-[490.67px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <h1 className="absolute bottom-12 left-[150px] text-white font-helvetica font-normal text-[100px] leading-[114.99px]">
        SMARTmatic
      </h1>
    </div>
  );
};

export default HeroSection;
