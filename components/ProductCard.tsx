import React from 'react'

const ProductCard = ({
  id,
  name,
  image,
  color,
  slug,
  router,
}: {
  id: string;
  name: string;
  image: string;
  color?: string;
  slug: string;
  router: any;
}) => {
  return (
    <div
      onClick={() => router.push(`/products/${slug}`)}
      className="w-full flex flex-col gap-[10px] relative group hover:scale-[1.01] transition-transform duration-300 ease-in-out"
    >
      <div className="h-[200px] md:h-[300px] bg-slate-700 relative cursor-pointer">
        <img
          src="/products/blur_bg.png"
          alt="background"
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
        />
        <img
          src={image}
          alt={name}
          className="w-full h-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover mix-blend-multiply"
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            router.push(`/quote/${id}`);
          }}
          className="hover:bg-slate-200 absolute bottom-0 right-0 font-helvetica font-light text-[20px] px-2 py-1 bg-white md:opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
        >
          +Quote
        </button>
      </div>
      <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[27.6px]">
        {name}
      </h1>

      {color && (
        <h1 className="font-helvetica font-light text-[20px] md:text-[24px] leading-[27.6px]">
          ({color})
        </h1>
      )}
    </div>
  );
};

export default ProductCard