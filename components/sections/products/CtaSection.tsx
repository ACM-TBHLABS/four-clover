import React from "react";

const CtaSection = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="w-[643px] flex flex-col gap-[12px] py-[100px] ml-auto">
        <h1 className="font-helvetica font-bold text-[24px] md:text-[32px] leading-[36.8px]">
          Need a Quote for your Clinic or Hospital?
        </h1>
        <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[27.6px]">
          Let us help you find the right dental solutions tailored to your
          needs. Contact us today for a personalized quotation and expert
          consultation.
        </h1>
        <button className="hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
