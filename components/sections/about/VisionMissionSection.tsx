import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="py-[50px] md:py-[100px] flex flex-col justify-start items-start">
      <div className="w-full h-fit md:h-[600px] flex flex-col md:flex-row-reverse justify-start items-start">
        <div className="w-full md:w-1/2 h-full flex">
          <img
            src="/about/vision.png"
            alt="vision"
            className="w-full max-h-[300px] md:max-h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col px-0 md:px-[50px] py-[20px] md:py-[100px]">
          <h1 className="font-helvetica font-normal text-[42px] md:text-[72px] whitespace-nowrap">
            Our Vision
          </h1>
          <p className="font-helvetica font-light text-[24px] md:text-[32px] leading-[1.2]">
            Leading the dental industry through trusted partnerships, delivering innovative solutions and exceptional services that elevate the standards of oral healthcare worldwide.
          </p>
        </div>
      </div>
      <div className="w-full h-fit md:h-[600px] flex flex-col md:flex-row justify-start items-start">
        <div className="w-full md:w-1/2 h-full flex">
          <img
            src="/about/mission.png"
            alt="vision"
            className="w-full max-h-[300px] md:max-h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col px-0 md:px-[50px] py-[20px] md:py-[100px]">
          <h1 className="font-helvetica font-normal text-[42px] md:text-[72px] whitespace-nowrap">
            Our Mission
          </h1>
          <p className="font-helvetica font-light text-[24px] md:text-[32px] leading-[1.2]">
            Empowering dental professionals and organizations with innovative products, exclusive training, and trusted partnerships that advance the quality and standards of dental care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
