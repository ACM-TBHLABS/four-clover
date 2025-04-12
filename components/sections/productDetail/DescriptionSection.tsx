"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portableTextComponents";
import { Image } from "@/types/image";

interface SectionProps {
  title: string;
  desc: Array<
      | { _type: "block"; children: any[] } // Blocks can contain various rich text elements
      | { _type: "image"; asset: Image; alt?: string }
    >;
}

const DescriptionSection: React.FC<SectionProps> = ({ title, desc }) => {
  const router = useRouter();
  return (
    <div className="py-[100px] flex gap-[10px] relative">
      <div className="w-full flex flex-col gap-[12px] relative">
        <h1 className="font-helvetica font-bold text-[32px] leading-[1.1]">
          {title}
        </h1>
        <div className="font-helvetica">
          <PortableText value={desc} components={portableTextComponents}/>
        </div>
        {/* <button
          className="hover:bg-black mt-10 hover:text-white transition-all duration-300 hover:scale-105 ease-in-out w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[24px] leading-[27.6px]"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button> */}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] border-b-[1px] border-[#666666]"></div>
    </div>
  );
};

export default DescriptionSection;
