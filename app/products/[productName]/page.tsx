"use client";

import FAQSection from "@/components/sections/landing/FAQSection";
import DescriptionSection from "@/components/sections/productDetail/DescriptionSection";
import HeroSection from "@/components/sections/productDetail/HeroSection";
import QuotationSection from "@/components/sections/productDetail/QuotationSection";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage: React.FC = () => {
  const { productName } = useParams<{ productName: string }>(); // Extract product name

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <HeroSection />
      <div className="max-w-screen md:max-w-[1600px] w-full">
        <div className="px-[24px] md:px-[150px]">
          <DescriptionSection />
          <QuotationSection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default ProductPage;
