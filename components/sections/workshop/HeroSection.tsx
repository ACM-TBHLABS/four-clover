import TimerSection from "./TimerSection";
import { Event } from "@/types/event";
import { urlFor } from "@/sanity/lib/image";

interface SectionProps {
  event: Event;
}

const HeroSection: React.FC<SectionProps> = ({ event }) => {
  return (
    <div className="w-full ">
      <TimerSection startDate={event.start_date} />
      <div className="w-full aspect-video relative">
        <img
          src={urlFor(event.intro_image).url()}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent">
          {/* Additional overlay at the bottom for text area */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white/80 to-transparent"></div>
        </div>
        <div className="bottom-10 left-10 absolute flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-helvetica font-light text-[18px] leading-[100%]">
              {new Date(event.start_date).toLocaleString("en-US", {
                dateStyle: "long",
                timeStyle: "short",
              })}
              , {event.location}{" "}
            </h1>
            <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
              {event.name}
            </h1>
            <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[100%]">
              {event.description}
            </h1>
          </div>
          <button className="w-fit backdrop-blur-xl bg-white/50 border-black border-[1px] rounded-full font-helvetica font-light text-[16px] md:text-[32px] py-3 px-8">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
