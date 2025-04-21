import { ChartLine, HandHelping, Lightbulb, UsersRound } from "lucide-react";
import React from "react";

const JoinUsSection = () => {
  return (
    <div id="join" className="flex flex-col gap-10 py-[50px] lg:py-[100px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] uppercase">
        Why Join Us
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[50px] justify-between">
        <div className="flex flex-col gap-[8px] w-full">
          <UsersRound className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Collaborative Culture
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[24px]">
            A supportive team where ideas thrive.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <HandHelping className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Purposeful Work
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[24px]">
            Contribute to meaningful advancements in dentistry.
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-[50px] justify-between">
        <div className="flex flex-col gap-2 w-full">
          <Lightbulb className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Innovative Environment
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[24px]">
            Work with industry-leading technology that transforms patient care.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <ChartLine className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
          {/* <img
            src="/icons/arrowgrowth.png"
            alt=""
            className="w-[48px] h-[48px]"
          /> */}
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Career Growth
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[24px]">
            Tailored development programs and career advancement opportunities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
