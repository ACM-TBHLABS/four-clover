import TimerSection from "./TimerSection";
import { Event } from "@/types/event";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface SectionProps {
  event: Event;
}

const HeroSection: React.FC<SectionProps> = ({ event }) => {
  return (
    <div className="w-full ">
      {event ? (
        <>
          <TimerSection startDate={event.start_date} />
          <div className="w-full h-[350px] md:h-auto md:aspect-video relative">
            <img
              src={urlFor(event.cover_image).url()}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent">
              {/* Additional overlay at the bottom for text area */}
            </div>
            <div className="flex bottom-2 md:bottom-10 left-2 md:left-10 absolute flex-col gap-[8px] md:gap-[32px]">
              <div className="flex flex-col gap-[8px] lg:gap-[16px] w-[80%]">
                <h1 className="hidden md:block font-helvetica font-light text-[18px] leading-[100%]">
                  {new Date(event.start_date).toLocaleString("en-US", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                  , {event.location}{" "}
                </h1>
                <h1 className="font-helvetica font-normal text-[24px] md:text-[56px] xl:text-[72px] leading-[100%]">
                  {event.name}
                </h1>
                <h1 className="md:hidden font-helvetica font-light text-[14px] md:text-[18px] leading-[110%] md:leading-[100%] w-2/3">
                  {new Date(event.start_date).toLocaleString("en-US", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                  , {event.location}{" "}
                </h1>
                <h1 className="hidden md:block font-helvetica font-light text-[20px] md:text-[24px] leading-[100%]">
                  {event.tagline}
                </h1>
              </div>
              <Link
                href={`/events/${event.slug}`}
                className="w-fit backdrop-blur-xl bg-white/50 border-black border-[1px] rounded-full font-helvetica font-light text-[16px] md:text-[32px] py-1 md:py-3 px-3 md:px-8 hover:bg-black/10 transform transition-all ease-in-out duration-100"
              >
                Read More
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col justify-center items-center overflow-x-hidden min-h-[90vh] gap-[25px]">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-700" />
          <h1>Fetching events</h1>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
