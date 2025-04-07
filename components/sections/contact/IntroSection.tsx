import React from "react";

const IntroSection = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="border-b">
        <h1 className="font-helvetica font-normal text-[24px] md:text-[32px]">
          Contacts
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-row gap-8 justify-between">
        <div className="w-[40%] flex flex-col gap-[13px] font-helvetica">
          <h1 className="font-light text-[13px] md:text-[18px] text-[#666666]">
            general inquiries
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            fourclover@fclv.work
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            +9 192 193 82832
          </h1>
        </div>
        <div className="w-[40%] flex flex-col gap-[13px] font-helvetica">
          <h1 className="font-light text-[13px] md:text-[18px] text-[#666666]">
            careers
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            hr@fclv.work
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            +9 192 193 82832
          </h1>
        </div>
        <div className="w-[40%] flex flex-col gap-[13px] font-helvetica">
          <h1 className="font-light text-[13px] md:text-[18px] text-[#666666]">
            collaborations
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            collaborations@fclv.work
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            +9 192 193 82832
          </h1>
        </div>
        <div className="w-[40%] flex flex-col gap-[13px] font-helvetica">
          <h1 className="font-light text-[13px] md:text-[18px] text-[#666666]">
            partnerships
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            partner.with@fclv.work
          </h1>
          <h1 className="font-normal text-[13px] md:text-[18px]">
            +9 192 193 82832
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
