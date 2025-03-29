import React from "react";

const IntroSection = () => {
  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div className="flex flex-col md:flex-row gap-[32px] h-[350px]">
        <div className="w-1/2 px-[20px] flex flex-col gap-[10px] justify-center">
          <h1 className="font-helvetica font-normal text-[16px] md:text-[32px] leading-none">
            Experience Dental Workshop
          </h1>
          <h1 className="font-helvetica font-light text-[18px] leading-none">
            Enhance your skills and stay ahead in dental innovation. Learn from
            industry experts and gain practical insights to elevate your
            practice.
          </h1>
        </div>
        <div className="w-1/2 bg-blue-200"></div>
      </div>
    </div>
  );
};

export default IntroSection;
