"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="h-[800px] w-full bg-red-500 relative">
      {/* Full-screen blur background */}
      <img
        src="/products/blur_bg.png"
        alt="products"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Constrain max width and ensure relative positioning */}
      <div className="w-full max-w-[1600px] mx-auto h-full relative flex items-center justify-center">
        <img
          src="/products/smartmatic.png"
          alt="products"
          className="w-[874.67px] h-[490.67px] object-cover"
        />
        <h1 className="absolute bottom-12 left-[150px] text-white font-helvetica font-normal text-[100px] leading-[114.99px]">
          SMARTmatic
        </h1>
        <ArrowLeft
          className="absolute top-12 left-[150px] text-black w-12 h-12 cursor-pointer"
          strokeWidth={1}
          onClick={() => router.push("/products")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
