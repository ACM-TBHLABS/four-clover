"use client";
import { Event } from "@/types/event";
import { useState, useEffect } from "react";

interface TimerProps {
  event: Event;
}

const TimerSection: React.FC<TimerProps> = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startTime = new Date(event.start_date).getTime();
      const now = new Date().getTime();
      const difference = startTime - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else {
        setIsEventStarted(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
    };

    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [event.start_date]);

  // Format numbers to ensure they're always two digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="w-full flex flex-col gap-[12px] py-[24px] justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-[12px]">
        <h1 className="font-helvetica font-bold text-[16px] md:text-[32px]">
          {isEventStarted ? "Event has started!" : `${event.name}`}
        </h1>
        {!isEventStarted ? (
          <div className="flex gap-[6px] items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
              <h1 className="font-bold text-[18px] md:text-[32px] leading-none">
                {formatNumber(timeLeft.days)}
              </h1>
              <h1 className="uppercase font-normal text-[12px] md:text-[20px] leading-none">
                Days
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
              <h1 className="font-bold text-[18px] md:text-[32px] leading-none">
                {formatNumber(timeLeft.hours)}
              </h1>
              <h1 className="uppercase font-normal text-[12px] md:text-[20px] leading-none px-1">
                hrs
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
              <h1 className="font-bold text-[18px] md:text-[32px] leading-none">
                {formatNumber(timeLeft.minutes)}
              </h1>
              <h1 className="uppercase font-normal text-[12px] md:text-[20px] leading-none">
                mins
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square p-4 rounded-sm gap-[2px]">
              <h1 className="font-bold text-[18px] md:text-[32px] leading-none">
                {formatNumber(timeLeft.seconds)}
              </h1>
              <h1 className="uppercase font-normal text-[12px] md:text-[20px] leading-none">
                secs
              </h1>
            </div>
          </div>
        ) : (
          <div className="text-green-400 px-6 py-3 rounded-md text-lg font-bold">
            Stay Tuned for more
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerSection;
