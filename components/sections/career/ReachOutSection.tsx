import { ArrowRightIcon } from "lucide-react";
import React from "react";

const ReachOutSection = () => {
  return (
    <div className="flex flex-col md:flex-row py-[50px] gap-[50px]">
      <div className="flex-1 w-full flex flex-col gap-[12px]">
        <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] uppercase leading-none whitespace-nowrap">
          Reach out
        </h1>
        <h1 className="font-helvetica font-light text-[18px] md:text-[24px] leading-[1.1]">
          Ready to Shape the Future of Dentistry? Apply today and let&apos;s
          make a difference together!
        </h1>
      </div>
      <div className="flex-1 w-full flex flex-col gap-[12px]">
        <div className="w-full flex flex-col gap-1 md:gap-2">
          <h1 className="font-helvetica font-normal text-[18px] md:text-[24px]">
            Email
          </h1>
          <input
            type="text"
            placeholder="sales@fourclover.com"
            className="w-full px-2 py-1 md:py-3 md:px-6 flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
          />
        </div>
        <div className="w-full flex flex-col gap-1 md:gap-2">
          <h1 className="font-helvetica font-normal text-[18px] md:text-[24px]">
            Bio
          </h1>
          <input
            type="text"
            placeholder="Your bio"
            className="w-full px-2 py-1 md:py-3 md:px-6 flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
          />
        </div>
        <button className="mt-3 px-2 py-1 md:px-6 md:py-4 flex gap-[20px] border-[0.5px] border-black rounded-[5px] items-center justify-center font-helvetica font-normal text-[20px] md:text-[24px]">
          Submit <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ReachOutSection;
