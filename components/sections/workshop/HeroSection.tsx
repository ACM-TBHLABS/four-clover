// import React from "react";
// import { Event } from "@/types/event";
// import { urlFor } from "@/sanity/lib/image";

// interface SectionProps {
//   event: Event;
// }

// const HeroSection: React.FC<SectionProps> = ({ event }) => {
//   return (
//     <div className="w-full ">
//       <TimerSection />
//       <div className="w-full aspect-video relative">
//         <img
//           src={urlFor(event.intro_image).url()}
//           className="w-full h-full object-cover"
//         />
//         <div className="bottom-10 left-10 absolute flex flex-col gap-[32px]">
//           <div className="flex flex-col gap-[16px]">
//             <h1 className="font-helvetica font-light text-[18px] leading-[100%]">
//               {event.start_date}, {event.location}
//             </h1>
//             <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[100%]">
//               {event.name}
//             </h1>
//             <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[100%]">
//               {event.description}
//             </h1>
//           </div>
//           <button className="w-fit backdrop-blur-xl bg-white/50 border-black border-[1px] rounded-full font-helvetica font-light text-[16px] md:text-[32px] py-3 px-8">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TimerSection = () => {
//   return (
//     <div className="w-full flex flex-col gap-[12px] py-[24px] justify-center items-center">
//       <div className="flex flex-col items-center justify-center gap-[12px]">
//         <h1 className="font-helvetica font-bold text-[16px] md:text-[32px]">
//           Upcoming Event
//         </h1>
//         <div className="flex gap-[6px] items-center justify-center">
//           <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
//             <h1 className="font-bold text-[16px] md:text-[32px] leading-none">
//               08
//             </h1>
//             <h1 className="uppercase font-normal text-[18px] md:text-[20px] leading-none">
//               Days
//             </h1>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
//             <h1 className="font-bold text-[16px] md:text-[32px] leading-none">
//               20
//             </h1>
//             <h1 className="uppercase font-normal text-[18px] md:text-[20px] leading-none px-1">
//               hrs
//             </h1>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
//             <h1 className="font-bold text-[16px] md:text-[32px] leading-none">
//               55
//             </h1>
//             <h1 className="uppercase font-normal text-[18px] md:text-[20px] leading-none">
//               mins
//             </h1>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
//             <h1 className="font-bold text-[16px] md:text-[32px] leading-none">
//               02
//             </h1>
//             <h1 className="uppercase font-normal text-[18px] md:text-[20px] leading-none">
//               secs
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

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
        <div className="bottom-10 left-10 absolute flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-helvetica font-light text-[18px] leading-[100%]">
              {event.start_date}, {event.location}
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
