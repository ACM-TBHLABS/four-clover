import React from "react";
import HeroSection from "@/components/sections/products/HeroSection";
import ProductsSection from "@/components/sections/products/ProductsSection";
import CtaSection from "@/components/sections/products/CtaSection";
import FAQSection from "@/components/sections/landing/FAQSection";

const ProductsPage = () => {
  return (
    <div>
      <div className="px-[150px]">
        <HeroSection />
        <ProductsSection />
        <CtaSection />
      </div>
      <FAQSection />
    </div>
  );
};

export default ProductsPage;
