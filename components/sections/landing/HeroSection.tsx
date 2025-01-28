import React from "react";

const HeroSection = () => {
  return (
    <div className="w-screen h-[800px] relative">
      {/* <Image
        src="/landing/hero.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0"
      /> */}
      <img
        src="/landing/hero.png"
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent blur-sm"></div> */}

      <h1 className="text-white text-[100px] font-helvetica font-normal leading-[114.99px] text-left absolute bottom-12 left-[150px]">
        Leading to Digital
      </h1>
    </div>
  );
};

export default HeroSection;
