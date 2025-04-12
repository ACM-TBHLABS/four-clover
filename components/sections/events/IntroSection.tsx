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
      <div className="flex flex-col md:flex-row justify-center items-center gap-[32px] md:h-[350px]">
        <div className="w-full md:w-1/2 md:px-[20px] flex flex-col gap-2 justify-center">
          <h1 className="font-helvetica font-normal text-[18px] md:text-[24px] lg:text-[32px] leading-none">
            {event.intro_title}
          </h1>
          <h1 className="font-helvetica font-light text-[16px] leading-none">
            {event.intro_description}
          </h1>
        </div>
        {/* <div className="w-full md:w-1/2 h-[350px] bg-blue-200"></div> */}
        <div className="w-full md:w-1/2 h-[300px] flex justify-center items-center">
          <img
            src={urlFor(event.intro_image).url()}
            alt="products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
