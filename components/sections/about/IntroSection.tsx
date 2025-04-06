import React from "react";

const IntroSection = () => {
  return (
    <div className="py-[50px] md:py-[100px] flex gap-[10px] relative">
      <div className="w-1/2 hidden md:block"></div>
      <div className="w-full md:w-1/2 flex flex-col gap-[12px] relative">
        <h1 className="font-helvetica font-light text-[24px] md:text-[32px] leading-[1.2]">
          At Four Clover, we empower dental professionals and organizations with premium products, exclusive training, and trusted collaborations that shape the future of dental care.
        </h1>
        <button className="hover:bg-black hover:text-white transition-all duration-300 md:hover:scale-105 ease-in-out w-fit md:w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Partner With Us
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
