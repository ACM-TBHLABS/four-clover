import FAQSection from "@/components/sections/landing/FAQSection";
import EventsSection from "@/components/sections/events/EventsSection";
import HeroSection from "@/components/sections/workshop/HeroSection";
import IntroSection from "@/components/sections/events/IntroSection";
import React from "react";

const WorkshopPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-screen md:max-w-[1600px]">
        <div className="flex flex-col gap-[50px] px-[150px]">
          <HeroSection />
          <IntroSection />
          <EventsSection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default WorkshopPage;
