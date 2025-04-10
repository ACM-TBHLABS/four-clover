"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  image: string;
  name: string;
}

const HeroSection: React.FC<Props> = ({ image, name }) => {
  const router = useRouter();
  return (
    <div className="h-[400px] md:h-[800px] w-full relative">
      {/* Full-screen blur background */}
      <img
        src="/products/blur_bg.png"
        alt="products"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Constrain max width and ensure relative positioning */}
      <div className="w-full max-w-[1600px] mx-auto h-full relative flex items-center justify-center">
        <img
          src={urlFor(image).url()}
          alt="products"
          className="w-[874.67px] h-[490.67px] object-contain md:object-cover"
        />
        <h1 className="absolute bottom-4 md:bottom-12 left-[24px] md:left-[150px] text-white font-helvetica font-normal text-[32px] md:text-[100px] leading-[114.99px]">
          {name}
        </h1>
        <ArrowLeft
          className="absolute top-4 md:top-12 left-[12px] md:left-[150px] text-black w-8 md:w-12 h-8 md:h-12 cursor-pointer"
          strokeWidth={1}
          onClick={() => router.push("/products")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
