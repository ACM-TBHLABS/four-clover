import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[250px] md:h-[400px] lg:h-[600px] w-full flex flex-col justify-end items-start pb-2 md:pb-12">
      {/* Full-screen blur background */}
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-b from-green-900/5 to-green-900/10"></div>
      <img
        src="/landing/hero.png"
        alt="products"
        className="w-full h-full max-h-[800px] object-cover absolute top-0 left-0 z-0"
      />
      <h1 className="w-full max-w-[1400px] mx-auto text-white font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] z-20 px-[24px] md:px-[50px] lg:px-[150px] leading-none">
        About Company
      </h1>
    </div>
  );
};

export default HeroSection;
