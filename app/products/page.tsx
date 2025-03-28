import React from "react";
import HeroSection from "@/components/sections/products/HeroSection";
import ProductsSection from "@/components/sections/products/ProductsSection";
import CtaSection from "@/components/sections/products/CtaSection";
import FAQSection from "@/components/sections/landing/FAQSection";

const ProductsPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="max-w-screen md:max-w-[1600px] w-full">
        <div className="px-[15px] md:px-[150px]">
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
