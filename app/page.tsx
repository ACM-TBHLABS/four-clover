import FAQSection from "@/components/sections/landing/FAQSection";
import HeroSection from "@/components/sections/landing/HeroSection";
import IntroSection from "@/components/sections/landing/IntroSection";
import PartnersSection from "@/components/sections/landing/PartnersSection";
import SolutionsSection from "@/components/sections/landing/SolutionsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <div className="max-w-screen md:max-w-[1600px] w-full ">
        <IntroSection />
        {/* <SolutionsSection /> */}
        <FAQSection />
        <PartnersSection />
      </div>
    </div>
  );
}
