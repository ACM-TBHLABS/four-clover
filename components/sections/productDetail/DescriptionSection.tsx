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
  colors?: any[];
  sizes?: any[];
}

const DescriptionSection: React.FC<SectionProps> = ({ title, desc, colors, sizes }) => {
  return (
    <div className="py-[100px] flex gap-[10px] relative">
      <div className="w-full flex flex-col gap-2 md:gap-5 relative">
        <h1 className="font-helvetica font-bold text-[32px] leading-[1.1]">
          {title}
        </h1>
        <div className="font-helvetica">
          <PortableText value={desc} components={portableTextComponents}/>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
          <h1 className="font-helvetica font-normal text-[32px] leading-[1.1]">Colors</h1>
          <div className="flex flex-wrap gap-2 md:gap-5">
            {colors?.length === 0 || !colors && (
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="text-[16px] font-helvetica text-[#666666] opacity-50">No colors available</span>
              </div>
            )}
            {colors?.map((color, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div
                    className="w-20 h-20 rounded-lg border-[1px] border-[#666666] flex justify-center items-center"
                    style={{ backgroundColor: color.code.includes("#") ? color.code : `#${color.code}` }}
                  ></div>
                  <span className="text-[16px] font-helvetica">{color.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
          <h1 className="font-helvetica font-normal text-[32px] leading-[1.1]">Sizes</h1>
          <div className="flex flex-wrap gap-2 md:gap-5">
            {sizes?.length === 0 || !sizes && (
              <div className="min-w-20 flex flex-col items-center gap-1">
                <span className="text-[16px] font-helvetica text-[#666666] opacity-50">No sizes available</span>
              </div>
            )}
            {sizes?.map((size, index) => {
              return (
                <div key={index} className="min-w-20 flex flex-col items-center gap-1 p-2 border-[1px] border-[#666666] rounded-lg">
                  <span className="text-[16px] font-helvetica">{size.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] border-b-[1px] border-[#666666]"></div>
    </div>
  );
};

export default DescriptionSection;
