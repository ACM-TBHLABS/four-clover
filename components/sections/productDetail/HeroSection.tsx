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
    <div className="w-full relative flex justify-center items-start ">
      {/* Full-screen blur background */}
      <img
        src="/products/blur_bg.png"
        alt="products"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Constrain max width and ensure relative positioning */}
      <div className="w-full max-w-[1400px] h-fit relative flex flex-col items-start justify-start px-6 md:px-[50px] lg:px-[150px] py-5">
        <ArrowLeft
          className="text-black w-8 md:w-12 h-8 md:h-12 cursor-pointer"
          strokeWidth={1}
          onClick={() => router.push("/products")}
        />
        <div className="w-full h-[250px] md:h-[400px] lg:h-[600px] flex justify-center items-center">
          <img
            src={urlFor(image).url()}
            alt="products"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        <h1 className="text-white font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] leading-none">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
