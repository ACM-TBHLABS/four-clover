import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";
import { urlFor } from "@/sanity/lib/image";
import ProductCard from "@/components/ProductCard";

const RelatedProductsSection = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  if (products.length === 0) return null; // Don't render if no products

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 py-[50px]">
      <h2 className="w-full text-[24px] md:text-[32px] lg:text-[56px] font-helvetica font-bold text-left">
        Related Products
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            image={urlFor(product.heroImage).url()}
            slug={product.slug}
            router={router}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsSection;
