import FAQSection from "@/components/sections/landing/FAQSection";
import HeroSection from "@/components/sections/landing/HeroSection";
import IntroSection from "@/components/sections/landing/IntroSection";
import PartnersSection from "@/components/sections/landing/PartnersSection";
import SolutionsSection from "@/components/sections/landing/SolutionsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <div className="max-w-[1800px] w-full ">
        <IntroSection />
        <SolutionsSection />
        <FAQSection />
        <PartnersSection />
      </div>
    </div>
  );
}
