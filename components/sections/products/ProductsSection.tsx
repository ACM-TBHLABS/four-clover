"use client";
import React, { useState } from "react";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Dental Aligners", "Chairs", "Implants", "3D Scanners"];
  const products = [
    {
      name: "SMARTmatic",
      category: "Dental Aligners",
      image: "/products/smartmatic.png",
    },
    {
      name: "SMARTmatic 2",
      category: "Dental Aligners",
      image: "/products/smartmatic.png",
    },
    {
      name: "SMARTmatic 3",
      category: "Dental Aligners",
      image: "/products/smartmatic.png",
    },
    {
      name: "Egronomic Chair (Steel Gray)",
      category: "Chairs",
      image: "/products/chair-gray.png",
    },
    {
      name: "Egronomic Chair (Cherry Red)",
      category: "Chairs",
      image: "/products/chair-red.png",
    },
    {
      name: "Egronomic Chair 2 (Cherry Red)",
      category: "Chairs",
      image: "/products/chair-red.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex border-black border-x-[0.5px] border-y-[0.5px] w-fit rounded-[8px] overflow-hidden cursor-pointer">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-between gap-y-[50px]">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

const TabButton = ({
  label,
  activeTab,
  setActiveTab,
}: {
  label: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div
      className={`w-[200px] h-[60px] text-center border-black flex items-center justify-center 
        transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#EFEFEF]
        ${
          label === "All"
            ? "w-[60px] border-l-0"
            : "w-[200px] border-l-[0.5px] "
        }
        ${
          activeTab === label
            ? "bg-[#EFEFEF] text-green-700 scale-[1.03] border-r-[0.5px]"
            : "bg-white text-black"
        }`}
      onClick={() => setActiveTab(label)}
    >
      <h1>{label}</h1>
    </div>
  );
};

const ProductCard = ({
  name,
  category,
  image,
}: {
  name: string;
  category: string;
  image: string;
}) => {
  return (
    <div className="w-[380px] flex flex-col gap-[10px]">
      <div className="h-[300px] bg-red-500 relative">
        <img
          src="/products/blur_bg.png"
          alt="products"
          className="w-full h-full object-cover"
        />
        <img
          src={image}
          alt="products"
          className="w-[328px] h-[184px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      <h1 className="font-helvetica font-light text-[24px] leading-[27.6px]">
        {name}
      </h1>
    </div>
  );
};

export default ProductsSection;
