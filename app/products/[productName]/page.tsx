"use client";

import React, { useEffect, useState } from "react";
import FAQSection from "@/components/sections/landing/FAQSection";
import DescriptionSection from "@/components/sections/productDetail/DescriptionSection";
import HeroSection from "@/components/sections/productDetail/HeroSection";
import QuotationSection from "@/components/sections/productDetail/QuotationSection";
import { useParams } from "next/navigation";
import { fetchProductsByProductLineId } from "@/services/api/productService";
import { ProductLine } from "@/types/productLine";

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<ProductLine>();
  const { productName } = useParams<{ productName: string }>(); // Extract product name

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const res = await fetchProductsByProductLineId(productName);
  //       setProduct(res);
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

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
