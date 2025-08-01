import React from "react";

interface EventCardStretchedProps {
  image: string;
  title: string;
  eventType: string;
  description: string;
  tagline: string;
}

const EventCardStretched: React.FC<EventCardStretchedProps> = ({
  image,
  title,
  eventType,
  description,
  tagline,
}) => {
  return (
    <div className="w-full flex gap-[32px] justify-between cursor-pointer">
      <div className="flex flex-col gap-[20px] w-[250px]">
        <h2 className="font-helvetica font-normal text-[16px] md:text-[32px] leading-none w-[250px]">
          {title}
        </h2>
        <h1 className={`capitalize bg-accent rounded-full border border-gray-200 px-8 py-1 w-fit ${eventType == "event" ? "text-cyan-600 bg-cyan-600/10" : "text-green-600 bg-green-600/10"}`}>
          {eventType}
        </h1>
      </div>

      <div className="flex gap-[12px] w-[250px]">
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[250px] object-cover"
        />
      </div>

      <div className="flex flex-row gap-[12px] w-[590px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="uppercase font-helvetica text-[20px] md:text-[24px] font-normal">
            {tagline}
          </h1>
          <h1 className="font-helvetica text-[#666666] text-[18px] font-light">
            {description}
          </h1>
        </div>
      </div>

      <div className="">
        <button className="rounded-full font-helvetica py-[8px] px-[12px] border-black border-[1px] w-fit h-fit whitespace-nowrap hover:bg-black/10 transform transition-all ease-in-out duration-100">
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventCardStretched;
