import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/about/HeroSection";
import IntroSection from "@/components/sections/about/IntroSection";
import LeadershipSection from "@/components/sections/about/LeadershipSection";
import OurJourney from "@/components/sections/about/OurJourney";
import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <div className="max-w-screen md:max-w-[1400px] w-full">
        <IntroSection />
        <VisionMissionSection />
        <OurJourney />
        <LeadershipSection />
        <FAQSection />
      </div>
    </div>
  );
};

export default page;
