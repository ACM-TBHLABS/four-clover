"use client";
import React from "react";
import { PlayCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="w-full relative flex flex-col items-center justify-center pt-[100px] py-[32px] xl:py-[100px]">
      {/* Green background that covers only half the image height */}
      <div className="absolute top-0 left-0 right-0 bg-[#DAFFB7] h-2/3 z-0"></div>

      <div className="w-full max-w-[1600px] px-[24px] md:px-[150px] flex flex-col gap-[32px] relative z-10">
        <div className="flex flex-row gap-[12px] justify-between w-full">
          <h1 className="w-full font-helvetica text-[32px] lg:text-[80px] font-normal uppercase">
            Lead the <br />
            Generation with
            <br /> Innovation
          </h1>
          <div className="flex-col gap-[12px] items-end mt-auto w-[300px] hidden xl:flex">
            <h1 className="font-helvetica text-[18px] font-light">
              We are committed to pioneering technological advancements that
              drive innovation within the dental industry.
            </h1>
            <button
              className="hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[24px] leading-[27.6px]"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Partner with Us
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1600px] h-auto z-10 relative">
          <img
            src="/landing/hero.png"
            alt="hero"
            className="w-full aspect-video object-cover rounded-[30px] md:border-[5px] border-[#DAFFB7]"
          />
          <PlayCircleIcon
            size={100}
            strokeWidth={0.55}
            className="absolute text-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-white rounded-full transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

{
  /* <div className="absolute bg-white bottom-0 left-0 h-[400px] w-screen" />
<div className="absolute bg-white bottom-0 right-0 h-[400px] w-screen" /> */
}
{
  /* <div className="absolute bg-white bottom-0 left-0 h-[20px] w-full z-1"></div> */
}
