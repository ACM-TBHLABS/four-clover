"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CtaSection = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end w-full">
      <div className="w-full lg:w-[643px] flex flex-col gap-[12px] py-10 md:py-[100px] ml-auto">
        <h1 className="font-helvetica font-bold text-[24px] md:text-[32px] leading-[1.1]">
          Need a Quote for your Clinic or Hospital?
        </h1>
        <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[1.1]">
          Let us help you find the right dental solutions tailored to your
          needs. Contact us today for a personalized quotation and expert
          consultation.
        </h1>
        <button
          className="hover:bg-black hover:text-white transition-all duration-300 md:hover:scale-105 ease-in-out w-fit lg:w-[280px] p-2 lg:py-[16px] md:px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px]"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
