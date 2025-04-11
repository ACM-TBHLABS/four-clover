"use client";
import React from "react";
import { useRouter } from "next/navigation";

const IntroSection = () => {
  const router = useRouter();
  return (
    <div className="p-[24px] md:p-[50px] lg:py-[100px] lg:px-[150px] flex gap-[10px] relative">
      <div className="w-1/2 hidden lg:block"></div>
      <div className="w-full lg:w-1/2 flex flex-col gap-3 relative">
        <h1 className="font-helvetica font-light text-[18px] md:text-[32px] leading-[1.2]">
          At Four Clover, we empower dental professionals and organizations with
          premium products, exclusive training, and trusted collaborations that
          shape the future of dental care.
        </h1>
        <button
          className="hover:bg-black hover:text-white transition-all duration-300 md:hover:scale-105 ease-in-out w-fit lg:w-[280px] p-2 lg:py-[16px] md:px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px]"
          onClick={() => router.push("/contact")}
        >
          Partner With Us
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
