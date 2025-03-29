import React from "react";

interface EventCardStretchedProps {
  image: string;
  title: string;
  description: string;
  tagline: string;
}

const EventCardStretched: React.FC<EventCardStretchedProps> = ({
  image,
  title,
  description,
  tagline,
}) => {
  return (
    <div className="w-full flex gap-[32px]">
      <div className="flex gap-[12px]">
        <h2 className="font-helvetica font-normal text-[16px] md:text-[32px] leading-none w-[250px]">
          {title}
        </h2>
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[250px] object-cover"
        />
      </div>

      <div className="flex flex-row gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="uppercase font-helvetica text-[20px] md:text-[24px] font-normal">
            {tagline}
          </h1>
          <h1 className="font-helvetica text-[#666666] text-[18px] font-light">
            {description}
          </h1>
        </div>
      </div>

      <button className="ml-auto rounded-full font-helvetica py-[8px] px-[12px] border-black border-[1px] w-fit h-fit">
        Read More
      </button>
    </div>
  );
};

export default EventCardStretched;
