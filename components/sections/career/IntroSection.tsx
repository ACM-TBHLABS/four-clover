import React from "react";

const IntroSection = () => {
  return (
    <div className="flex flex-col gap-[24px] py-[100px] w-full">
      <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase">
        Our Teams
      </h1>
      <div className="flex justify-between">
        <div className="w-[250px] flex flex-col gap-[8px]">
          <img
            src="/products/blur_bg.png"
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Dr. John Doe
          </h1>
          <h1 className="font-helvetica text-[18px] font-light">
            Doctor of Dental Surgery (DDS)
          </h1>
        </div>
        <div className="w-[250px] flex flex-col gap-[8px]">
          <img
            src="/products/blur_bg.png"
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Dr. John Doe
          </h1>
          <h1 className="font-helvetica text-[18px] font-light">
            Doctor of Dental Surgery (DDS)
          </h1>
        </div>
        <div className="w-[250px] flex flex-col gap-[8px]">
          <img
            src="/products/blur_bg.png"
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Dr. John Doe
          </h1>
          <h1 className="font-helvetica text-[18px] font-light">
            Doctor of Dental Surgery (DDS)
          </h1>
        </div>
        <div className="w-[250px] flex flex-col gap-[8px]">
          <img
            src="/products/blur_bg.png"
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Dr. John Doe
          </h1>
          <h1 className="font-helvetica text-[18px] font-light">
            Doctor of Dental Surgery (DDS)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
