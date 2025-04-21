import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="py-[50px] lg:py-[100px] lg:px-[150px] flex flex-col justify-start items-start">
      <div
        id="vision"
        className="w-full h-fit lg:h-[500px] flex flex-col md:flex-row-reverse justify-start items-start"
      >
        <div className="w-full md:w-1/2 h-full flex">
          <img
            src="/about/vision.png"
            alt="vision"
            className="w-full max-h-[200px] md:max-h-[400px] lg:max-h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 md:pl-[50px] gap-2">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] whitespace-nowrap leading-none">
            Our Vision
          </h1>
          <p className="font-helvetica font-light text-[18px] md:text-[24px] lg:text-[32px] leading-[1.2]">
            Leading the dental industry with trusted partnerships and innovative
            solutions that elevate global oral healthcare standards.
          </p>
        </div>
      </div>
      <div
        id="mission"
        className="w-full h-fit lg:h-[500px] flex flex-col md:flex-row justify-start items-start"
      >
        <div className="w-full md:w-1/2 h-full flex">
          <img
            src="/about/mission.png"
            alt="vision"
            className="w-full max-h-[200px] md:max-h-[400px] lg:max-h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 lg:pl-[50px] gap-2">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] whitespace-nowrap leading-none">
            Our Mission
          </h1>
          <p className="font-helvetica font-light text-[18px] md:text-[24px] lg:text-[32px] leading-[1.2]">
            Empowering dental professionals with innovative products, expert
            training, and trusted partnerships to advance dental care standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
