"use client";
import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center pt-[100px] py-[32px] xl:py-[100px]">
      {/* Green background that covers only half the image height */}
      <div className="absolute top-0 left-0 right-0 bg-[#DAFFB7] h-2/3 z-0"></div>

      <div className="w-full max-w-[1400px] px-[24px] md:px-[50px] lg:px-[150px] flex flex-col gap-[32px] relative z-10">
        <div className="flex flex-row gap-[12px] justify-between w-full">
          <h1 className="w-full font-helvetica text-[32px] md:text-[56px] lg:text-[64px] font-normal uppercase leading-[1.1]">
            Lead the <br />
            Generation with
            <br /> Innovation
          </h1>
          <div className="flex-col gap-[12px] items-end mt-auto w-[300px] hidden lg:flex">
            <h1 className="font-helvetica text-[18px] font-light">
              We are committed to pioneering technological advancements that
              drive innovation within the dental industry.
            </h1>
            <button
              className="hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[24px] leading-[27.6px]"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Partner with Us
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1400px] h-auto z-10 relative">
          <div className="w-full h-[250px] md:h-[400px] lg:h-[600px] flex justify-center items-center rounded-lg md:rounded-3xl overflow-hidden">
            <video
              src="/video/hero.mp4"
              className="w-full h-full aspect-video object-cover border-[#DAFFB7]"
              autoPlay
              muted={isMuted}
              loop
              playsInline
            />
          </div>

          {/* Mute/Unmute button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-all duration-300 ease-in-out"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={24} className="text-gray-800" />
            ) : (
              <Volume2 size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
