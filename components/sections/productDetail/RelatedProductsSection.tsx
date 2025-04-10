import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/Product";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({
  id,
  name,
  image,
  slug,
  router,
}: {
  id: string;
  name: string;
  image: string;
  slug: string;
  router: any;
}) => {
  return (
    <div
      onClick={() => router.push(`/products/${slug}`)}
      className="w-full md:w-[380px] flex flex-col gap-[10px] relative group hover:scale-[1.01] transition-transform duration-300 ease-in-out"
    >
      <div className="h-[300px] bg-slate-700 relative cursor-pointer">
        <img
          src="/products/blur_bg.png"
          alt="background"
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
        />
        <img
          src={image}
          alt={name}
          className="w-[328px] h-[184px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <button
          className="hover:bg-slate-200 absolute bottom-0 right-0 font-helvetica font-light text-[20px] leading-[23px] px-[10px] py-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
        >
          +Quote
        </button>
      </div>
      <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[27.6px]">
        {name}
      </h1>
    </div>
  );
};

const RelatedProductsSection = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  if (products.length === 0) return null; // Don't render if no products

  return (
    <div className="w-full py-[60px]">
      <h2 className="text-[36px] font-helvetica font-bold text-center mb-[40px]">
        Related Products
      </h2>
      <div className="flex flex-wrap justify-center gap-[20px]">
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
