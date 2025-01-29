import React from "react";
import HeroSection from "@/components/sections/products/HeroSection";
import ProductsSection from "@/components/sections/products/ProductsSection";
import CtaSection from "@/components/sections/products/CtaSection";
import FAQSection from "@/components/sections/landing/FAQSection";

const ProductsPage = () => {
  return (
    <div className="px-[150px] min-h-screen">
      <HeroSection />
      <ProductsSection />
      <CtaSection />
      <FAQSection />
    </div>
  );
};

export default ProductsPage;
