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
    <div>
      <HeroSection />
      <div className="px-[150px]">
        <DescriptionSection />
        <QuotationSection />
      </div>
      <FAQSection />
    </div>
  );
};

export default ProductPage;
