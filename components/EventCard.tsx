import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  tagline: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  description,
  tagline,
}) => {
  return (
    <div className="w-full flex flex-col gap-[12px]">
      <div className="w-full max-h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full aspect-video object-cover"
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2 className="font-helvetica font-normal text-[16px] md:text-[32px] leading-none">
          {title}
        </h2>
        <div className="flex flex-col gap-[4px]">
          <h1 className="uppercase font-helvetica text-[20px] md:text-[24px] font-normal">
            {tagline}
          </h1>
          <h1 className="font-helvetica text-[#666666] text-[18px] font-light">
            {description}
          </h1>
        </div>
        <button className="rounded-full font-helvetica py-[8px] px-[12px] border-black border-[1px] w-fit">
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
