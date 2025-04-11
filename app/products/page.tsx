import React from "react";
import HeroSection from "@/components/sections/products/HeroSection";
import ProductsSection from "@/components/sections/products/ProductsSection";
import CtaSection from "@/components/sections/products/CtaSection";
import FAQSection from "@/components/FAQSection";

const ProductsPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="max-w-screen md:max-w-[1400px] w-full">
        <div className="flex flex-col justify-start items-start gap-8 md:gap-[50px] lg:gap-[100px] px-6 md:px-[50px] lg:px-[150px]">
          <HeroSection />
          <ProductsSection />
          <CtaSection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default ProductsPage;
