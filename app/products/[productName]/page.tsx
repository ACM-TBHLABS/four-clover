"use client";
import React, { useEffect, useState } from "react";
import FAQSection from "@/components/sections/landing/FAQSection";
import DescriptionSection from "@/components/sections/productDetail/DescriptionSection";
import HeroSection from "@/components/sections/productDetail/HeroSection";
import QuotationSection from "@/components/sections/productDetail/QuotationSection";
import { useParams } from "next/navigation";
import {
  fetchProductBySlug,
  fetchProductsByProductLineId,
} from "@/services/api/productService";
import { ProductLine } from "@/types/productLine";
import { Product } from "@/types/Product";

const ProductPage = () => {
  const [product, setProduct] = useState<any>();
  const { productName } = useParams<{ productName: string }>(); // Extract product name

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetchProductBySlug(productName);
        setProduct(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <HeroSection image={product?.heroImage} name={product?.name} />
      <div className="max-w-screen md:max-w-[1600px] w-full">
        <div className="px-[24px] md:px-[150px]">
          <DescriptionSection
            title={product?.tagline}
            desc={product?.description}
          />
          <QuotationSection />
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default ProductPage;
