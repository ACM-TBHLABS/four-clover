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
          <TimerSection event={event} />
          <div className="w-full h-[350px] md:h-auto md:aspect-video relative">
            <img
              src={urlFor(event.cover_image).url()}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent">
              {/* Additional overlay at the bottom for text area */}
            </div>
            <div className="w-full flex bottom-0 absolute flex-col gap-3 lg:gap-5 p-3 md:p-4 lg:p-5">
              <div className="w-full flex flex-col-reverse md:flex-col gap-2">
                <h1 className="font-helvetica font-light text-[14px] lg:text-3xl leading-[100%]">
                  {new Date(event.start_date).toLocaleString("en-US", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                  , {event.location}{" "}
                </h1>
                <h1 className="font-helvetica font-normal text-[24px] md:text-[32px] xl:text-[64px] leading-[1]">
                  {event.name}
                </h1>
                <h1 className="hidden md:block font-helvetica font-light text-[20px] lg:text-3xl leading-[1]">
                  {event.tagline}
                </h1>
              </div>
              <Link
                className="rounded-full lg:hover:bg-black lg:hover:text-white transition-all duration-300 ease-in-out w-fit lg:w-[280px] px-3 py-1 lg:py-[16px] md:px-[24px] border-solid border-black border-[0.5px] text-center font-helvetica font-normal text-[16px] md:text-[24px]"
                href={`/events/${event.slug}`}
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
