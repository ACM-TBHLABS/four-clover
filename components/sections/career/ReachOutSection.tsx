import { ArrowRightIcon } from "lucide-react";
import React from "react";

const ReachOutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-[100px] gap-[50px]">
      <div className="w-full lg:w-1/2 flex flex-col gap-[12px]">
        <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase">
          Reach out
        </h1>
        <h1 className="font-helvetica text-[20px] md:text-[24px]">
          Ready to Shape the Future of Dentistry? Apply today and let&apos;s
          make a difference together!
        </h1>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-[12px] max-w-[800px]">
        <div className="w-full flex flex-col gap-[12px]">
          <h1 className="font-helvetica font-normal text-[20px] md:text-[24px]">
            Email
          </h1>
          <input
            type="text"
            placeholder="sales@fourclover.com"
            className="w-full py-[12px] px-[24px] flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
          />
        </div>
        <div className="w-full flex flex-col gap-[12px]">
          <h1 className="font-helvetica font-normal text-[20px] md:text-[24px]">
            Bio
          </h1>
          <input
            type="text"
            placeholder="Your bio"
            className="w-full py-[12px] px-[24px] flex flex-col gap-[10px] border-[0.5px] border-black rounded-[8px] font-helvetica font-light text-[20px]"
          />
        </div>
        <button className="mt-3 px-[24px] py-[16px] flex gap-[20px] border-[0.5px] border-black rounded-[5px] items-center justify-center font-helvetica font-normal text-[20px] md:text-[24px]">
          Submit <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ReachOutSection;
