import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#DAFFB7] relative flex flex-col items-center justify-center pt-[100px] mb-[100px]">
      <div className="w-full max-w-[1600px] px-[150px] flex flex-col gap-[32px]">
        <div className="flex flex-row gap-[12px] justify-between w-full">
          <h1 className="w-full font-helvetica text-[32px] md:text-[80px] font-normal uppercase">
            Lead the <br />
            Generation with
            <br /> Innovation
          </h1>
          <div className="flex flex-col gap-[12px] items-end mt-auto w-[300px]">
            <h1 className="font-helvetica text-[18px] font-light">
              We are committed to pioneering technological advancements that
              drive innovation within the dental industry.
            </h1>
            <button className="hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[24px] leading-[27.6px]">
              Partner with Us
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1600px] h-auto z-10">
          <img
            src="/landing/hero.png"
            alt="hero"
            className="w-full h-[600px] object-cover rounded-[30px] border-[20px] border-[#DAFFB7] border-rounded-[30px]"
          />
        </div>
      </div>
      <div className="absolute bg-white bottom-0 left-0 h-[300px] w-[calc((100vw-1600px)/2+150px)] rounded-t-xl" />
      <div className="absolute bg-white bottom-0 right-0 h-[300px] w-[calc((100vw-1600px)/2+150px)] rounded-t-xl" />
      <div className="absolute bg-white bottom-0 left-0 h-[20px] w-full z-1"></div>
    </div>
  );
};

export default HeroSection;
