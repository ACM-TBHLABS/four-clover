import HeroSection from "@/components/sections/career/HeroSection";
import IntroSection from "@/components/sections/career/IntroSection";
import JoinUsSection from "@/components/sections/career/JoinUsSection";
import ReachOutSection from "@/components/sections/career/ReachOutSection";
import React from "react";

const CareerPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-screen md:max-w-[1600px]">
        <div className="flex flex-col gap-[50px] px-[150px]">
          <HeroSection />
          <IntroSection />
          <JoinUsSection />
          <ReachOutSection />
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
