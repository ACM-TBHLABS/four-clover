import AddressSection from "@/components/sections/contact/AddressSection";
import HeroSection from "@/components/sections/contact/HeroSection";
import IntroSection from "@/components/sections/contact/IntroSection";

import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-screen md:max-w-[1400px] px-[24px] md:px-[150px] flex flex-col gap-[50px] py-[100px]">
        <HeroSection />
        <IntroSection />
        <AddressSection />
      </div>
    </div>
  );
};

export default ContactPage;
