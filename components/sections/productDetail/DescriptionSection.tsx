"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DescriptionSection = () => {
  const router = useRouter();
  return (
    <div className="py-[100px] flex gap-[10px] relative">
      <div className="w-1/2 hidden md:block"></div>
      <div className="w-full md:w-1/2 flex flex-col gap-[12px] relative">
        <h1 className="font-helvetica font-bold text-[32px] leading-[36.8px]">
          Super Strong, Super Quiet.
        </h1>
        <h1 className="font-helvetica font-light text-[16px] md:text-[24px] leading-[27.6px]">
          KaVo&apos;s MASTERtorque premium air-driven handpieces feature
          superlative performance with up to 20% more power than KaVo&apos;s
          previous generation high-speed GENTLEsilence 6500BR.
          <br />
          <br /> Our patented design offers superior access and visibility,
          especially in the posterior. The extremely well-balanced turbines
          create whisper quiet operation that protects your hearing and helps
          create a more relaxing environment for all.
        </h1>
        <button
          className="hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[24px] leading-[27.6px]"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] border-b-[1px] border-[#666666]"></div>
    </div>
  );
};

export default DescriptionSection;
