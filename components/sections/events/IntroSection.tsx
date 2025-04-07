import { urlFor } from "@/sanity/lib/image";
import { Event } from "@/types/event";
import React from "react";

interface SectionProps {
  event: Event;
}

const IntroSection: React.FC<SectionProps> = ({ event }) => {
  if (!event) {
    return (
      <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div className="flex flex-col md:flex-row gap-[32px] md:h-[350px]">
        <div className="w-full md:w-1/2 md:px-[20px] flex flex-col gap-[10px] justify-center">
          <h1 className="font-helvetica font-normal text-[16px] md:text-[32px] leading-none">
            Experience Dental Workshop
          </h1>
          <h1 className="font-helvetica font-light text-[18px] leading-none">
            Enhance your skills and stay ahead in dental innovation. Learn from
            industry experts and gain practical insights to elevate your
            practice.
          </h1>
        </div>
        {/* <div className="w-full md:w-1/2 h-[350px] bg-blue-200"></div> */}
        <img
          src={urlFor(event.intro_image).url()}
          alt="products"
          className="w-full md:w-1/2 h-[350px]"
        />
      </div>
    </div>
  );
};

export default IntroSection;
