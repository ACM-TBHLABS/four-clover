import { Users2Icon } from "lucide-react";
import React from "react";

const JoinUsSection = () => {
  return (
    <div className="flex flex-col gap-[50px] py-[100px]">
      <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase">
        Why Join Us
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-[50px] justify-between">
        <div className="flex flex-col gap-[8px] w-full md:w-1/2">
          <Users2Icon className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Collaborative Culture
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            A supportive team where ideas thrive.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full md:w-1/2">
          <Users2Icon className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Purposeful Work
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Contribute to meaningful advancements in dentistry.
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[50px] justify-between">
        <div className="flex flex-col gap-[8px] w-full md:w-1/2">
          <Users2Icon className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Innovative Environment
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Work with industry-leading technology that transforms patient care.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full md:w-1/2">
          <Users2Icon className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Career Growth
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Tailored development programs and career advancement opportunities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
