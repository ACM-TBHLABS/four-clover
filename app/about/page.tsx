import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/about/HeroSection";
import IntroSection from "@/components/sections/about/IntroSection";
import LeadershipSection from "@/components/sections/about/LeadershipSection";
import OurJourney from "@/components/sections/about/OurJourney";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import FAQSection from "@/components/sections/landing/FAQSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />

      <div className="max-w-screen md:max-w-[1600px] w-full">
        <div className="px-[24px] md:px-[150px]">
          <IntroSection />
          <VisionMissionSection />
          <OurJourney />
          <LeadershipSection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default page;
