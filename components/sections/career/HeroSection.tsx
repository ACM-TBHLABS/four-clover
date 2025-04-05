import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[400px] flex flex-col gap-8 items-center justify-center">
      <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase text-center">
        Passion and Innovation
      </h1>
      <h1 className="w-[600px] font-helvetica text-[18px] font-light text-center">
        At 4 Clover, we empower dental professionals with cutting-edge
        instruments designed to elevate patient care. Join us in redefining the
        future of oral healthcare.
      </h1>
    </div>
  );
};

export default HeroSection;
