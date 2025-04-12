import { ArrowRightIcon, SendHorizonalIcon } from "lucide-react";
import React from "react";

const QuotationSection = () => {
  return (
    <div className="py-[100px] flex flex-col md:flex-row gap-[20px]">
      <h1 className="w-full md:w-1/2 font-helvetica font-normal text-[36px] md:text-[64px] md:leading-[82.79px]">
        Submit Product Quotation
      </h1>
      <div className="w-full md:w-1/2 max-w-[800px] flex flex-col gap-[20px]">
        <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Product Code
        </h1>
        <input
          type="text"
          placeholder="CM4284E"
          className="w-full max-w-[800px] font-helvetica font-light text-[20px] leading-[23px] placeholder-[#666666] px-[24px] py-[12px] rounded-[8px] border-[0.5px] border-solid border-[#666666]"
        />
        <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Email
        </h1>
        <input
          type="text"
          placeholder="sales@fourclover.com"
          className="w-full max-w-[800px] font-helvetica font-light text-[20px] leading-[23px] placeholder-[#666666] px-[24px] py-[12px] rounded-[8px] border-[0.5px] border-solid border-[#666666]"
        />
        <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Organization
        </h1>
        <input
          type="text"
          placeholder="customer organization name"
          className="w-full max-w-[800px] font-helvetica font-light text-[20px] leading-[23px] placeholder-[#666666] px-[24px] py-[12px] rounded-[8px] border-[0.5px] border-solid border-[#666666]"
        />
        <button className="mt-[20px] md:mt-0 hover:bg-black flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
          Submit <ArrowRightIcon size={20} className="ml-6" />
        </button>
      </div>
    </div>
  );
};

export default QuotationSection;
