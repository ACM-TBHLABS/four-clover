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
    <div className="w-full h-full flex flex-col gap-[12px]">
      <div className="w-full max-h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full aspect-video object-cover"
        />
      </div>
      <div className="h-full flex-1 flex flex-col gap-2 md:gap-3">
        <h1 className="font-helvetica font-normal text-[18px] md:text-[32px] leading-[1.1]">
          {title}
        </h1>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="md:uppercase font-helvetica text-[16px] md:text-[24px] font-light md:font-normal leading-none truncate">
            {tagline}
          </h1>
          <h1 className="font-helvetica text-[#666666] text-[16px] md:text-[24px] font-light leading-[1.1] line-clamp-2 md:line-clamp-none">
            {description}
          </h1>
        </div>
        <button className="rounded-full lg:hover:bg-black lg:hover:text-white transition-all duration-300 ease-in-out w-fit lg:w-[280px] px-3 py-1 lg:py-[16px] md:px-[24px] border-solid border-black border-[0.5px] text-center font-helvetica font-normal text-[16px] md:text-[24px] mt-3 lg:mt-auto">
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
