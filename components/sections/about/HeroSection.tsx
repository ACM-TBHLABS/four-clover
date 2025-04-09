import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[400px] md:h-[800px] w-full relative flex flex-col justify-end items-start pb-2 md:pb-12">
      {/* Full-screen blur background */}
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-b from-green-900/5 to-green-900/10"></div>
      <img
        src="/landing/hero.png"
        alt="products"
        className="w-full h-full max-h-[800px] object-cover absolute top-0 left-0 z-0"
      />
      <h1 className="w-full max-w-[1600px] mx-auto text-white font-helvetica font-normal text-[40px] md:text-[100px] md:leading-[114.99px] z-20  px-[20px] md:px-[150px]">
        About Company
      </h1>
    </div>
  );
};

export default HeroSection;
