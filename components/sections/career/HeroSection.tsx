import React from "react";

const HeroSection = () => {
  return (
    <div
      id="team"
      className="w-full min-h-[400px] flex flex-col gap-2 md:gap-8 items-center justify-center"
    >
      <h1 className="font-helvetica font-normal text-[36px] md:text-[56px] lg:text-[64px] uppercase text-center leading-[1.1]">
        Passion and Innovation
      </h1>
      <h1 className="md:w-[600px] font-helvetica text-[18px] font-light text-center">
        At Four Clover, we empower dental professionals with cutting-edge
        instruments designed to elevate patient care. Join us in redefining the
        future of oral healthcare.
      </h1>
    </div>
  );
};

export default HeroSection;
