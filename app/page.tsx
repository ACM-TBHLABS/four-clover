import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/sections/landing/HeroSection";
import IntroSection from "@/components/sections/landing/IntroSection";
import PartnersSection from "@/components/sections/landing/PartnersSection";
import SpotlightSection from "@/components/sections/landing/SpotlightSection";

export default function Home() {
  return (
    // prod
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <div className="max-w-screen md:max-w-[1400px] w-full">
        <IntroSection />
        <SpotlightSection />
        <PartnersSection />
        <FAQSection />
      </div>
    </div>
  );
}
