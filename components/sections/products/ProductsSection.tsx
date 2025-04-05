"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { fetchAllProductLines } from "@/services/api/productLineService";
import { ProductLine } from "@/types/productLine";

const ProductsSection = () => {
  const router = useRouter();
  const [productLines, setProductLines] = useState<ProductLine[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const tabs = ["All", "Dental Aligners", "Chairs", "Implants", "3D Scanners"];

  useEffect(() => {
    const fetchProductLines = async () => {
      setLoading(true);
      try {
        const res = await fetchAllProductLines();
        console.log("Fetched:", res);
        setProductLines(res);
      } catch (error) {
        console.error("Error fetching product lines:", error);
      }
      setLoading(false);
    };
    fetchProductLines();
  }, []);

  // Filter products based on active tab
  // fetch productlines by category
  const filteredProducts =
    activeTab === "All"
      ? productLines
      : productLines.filter((product) => product.category.name === activeTab);

  if (loading) return <p>Loading product lines...</p>;

  return (
    <div className="flex flex-col gap-[50px]">
      {/* Desktop Tabs */}
      <div className="hidden md:flex border-black border-x-[0.5px] border-y-[0.5px] w-fit rounded-[8px] overflow-hidden cursor-pointer">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between border border-black rounded-[8px] p-3 bg-white"
        >
          <span
            className={`${
              activeTab === "All" ? "text-black" : "text-green-700"
            }`}
          >
            {activeTab}
          </span>
          <ChevronDown
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute z-10 w-full border border-black rounded-[8px] mt-1 bg-white shadow-lg">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsDropdownOpen(false);
                }}
                className={`p-3 hover:bg-[#EFEFEF] cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-[#EFEFEF] text-green-700"
                      : "text-black"
                  }
                  ${tab === tabs[tabs.length - 1] ? "rounded-b-[8px]" : ""}
                  ${tab === tabs[0] ? "rounded-t-[8px]" : ""}`}
              >
                {tab}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-between gap-y-[50px]">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.name}
            id={product._id}
            name={product.name}
            category={product.category.name}
            image="/products/smartmatic.png"
            // color={product.color ? product.color : ""}
            router={router}
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
  id,
  name,
  category,
  image,
  color,
  router,
}: {
  id: string;
  name: string;
  category: string;
  image: string;
  color?: string;
  router: any;
}) => {
  return (
    <div
      onClick={() => router.push(`/products/${id}`)}
      className="w-full md:w-[380px] flex flex-col gap-[10px] relative group hover:scale-[1.01] transition-transform duration-300 ease-in-out"
    >
      <div className="h-[300px] bg-slate-700 relative cursor-pointer">
        <img
          src="/products/blur_bg.png"
          alt="products"
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500 "
        />
        <img
          src={image}
          alt="products"
          className="w-[328px] h-[184px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <button
          onClick={() => router.push("/products/productXYZ")}
          className="hover:bg-slate-200 absolute bottom-0 right-0 font-helvetica font-light text-[20px] leading-[23px] px-[10px] py-[5px] bg-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
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

export default ProductsSection;
