"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { fetchAllCategories } from "@/services/api/categoryService";
import { fetchAllProductLines } from "@/services/api/productLineService";
import { fetchProductsByProductLineId } from "@/services/api/productService";
import { fetchAllProducts } from "@/services/api/productService"; // Assuming this endpoint exists
import { ProductLine } from "@/types/productLine";
import { Category } from "@/types/category";
import { Product } from "@/types/Product";
import { urlFor } from "@/sanity/lib/image";

const ProductsSection = () => {
  // warning: 80% Vibe Coded. If you cant fix it, Claudes Sonnet 3.7 can
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [productLines, setProductLines] = useState<ProductLine[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("");
  const [activeProductLineId, setActiveProductLineId] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Initial data fetching - categories and product lines
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);

        // Fetch categories and product lines in parallel
        const [categoriesRes, productLinesRes] = await Promise.all([
          fetchAllCategories(),
          fetchAllProductLines(),
        ]);

        setCategories(categoriesRes);
        setProductLines(productLinesRes);

        // Set default active tab to "All"
        setActiveTab("All");

        // Fetch all products for the initial "All" tab
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Handle tab changes
  const handleTabChange = async (tabName: string) => {
    if (activeTab === tabName) return;

    // Clear products and show loading state
    setProducts([]);
    setLoading(true);
    setActiveTab(tabName);

    try {
      if (tabName === "All") {
        // For "All" tab, fetch all products without filtering
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } else {
        // For category tabs, get all product lines for this category
        const filtered = productLines.filter(
          (product) => product.category.name === tabName
        );

        if (filtered.length > 0) {
          // Fetch products for all product lines in this category in parallel
          const productPromises = filtered.map((productLine) =>
            fetchProductsByProductLineId(productLine._id)
          );

          const productArrays = await Promise.all(productPromises);

          // Flatten the array of arrays into a single array of products
          const allCategoryProducts = productArrays.flat();

          setProducts(allCategoryProducts);

          // Still set the active product line ID to the first one for UI selection
          setActiveProductLineId(filtered[0]._id);
        } else {
          // No product lines for this category
          setProducts([]);
        }
      }
    } catch (error) {
      console.error(`Error fetching products for tab ${tabName}:`, error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle product line selection
  const handleProductLineChange = async (productLineId: string) => {
    if (activeProductLineId === productLineId) return;

    // Clear products and show loading state
    setProducts([]);
    setLoading(true);
    setActiveProductLineId(productLineId);

    try {
      const lineProducts = await fetchProductsByProductLineId(productLineId);
      setProducts(lineProducts);
    } catch (error) {
      console.error(
        `Error fetching products for product line ${productLineId}:`,
        error
      );
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Get filtered product lines for UI
  const filteredProductLines =
    activeTab === "All"
      ? [] // Don't show product line filters in "All" tab
      : productLines.filter((product) => product.category.name === activeTab);

  // Show loading indicator while initial data is loading
  if (loading && categories.length === 0) {
    return <p>Loading product lines...</p>;
  }

  return (
    <div className="flex flex-col gap-[50px]">
      {/* Desktop Tabs */}
      <div className="hidden md:flex border-black border-x-[0.5px] border-y-[0.5px] w-fit rounded-[8px] overflow-hidden cursor-pointer">
        <TabButton
          key="all-tab"
          label="All"
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        {categories.map((tab) => (
          <TabButton
            key={tab._id}
            label={tab.name}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
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
            <div
              onClick={() => {
                handleTabChange("All");
                setIsDropdownOpen(false);
              }}
              className={`p-3 hover:bg-[#EFEFEF] cursor-pointer
                ${
                  activeTab === "All"
                    ? "bg-[#EFEFEF] text-green-700"
                    : "text-black"
                }
                ${categories.length === 0 ? "rounded-b-[8px]" : ""}
                rounded-t-[8px]`}
            >
              All
            </div>
            {categories.map((tab, index) => (
              <div
                key={tab._id}
                onClick={() => {
                  handleTabChange(tab.name);
                  setIsDropdownOpen(false);
                }}
                className={`p-3 hover:bg-[#EFEFEF] cursor-pointer
                  ${
                    activeTab === tab.name
                      ? "bg-[#EFEFEF] text-green-700"
                      : "text-black"
                  }
                  ${index === categories.length - 1 ? "rounded-b-[8px]" : ""}`}
              >
                {tab.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Line Selection - Only show when not in "All" tab and multiple product lines exist */}
      {activeTab !== "All" && filteredProductLines.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {filteredProductLines.map((line) => (
            <button
              key={line._id}
              onClick={() => handleProductLineChange(line._id)}
              className={`px-4 py-2 border rounded-md ${
                activeProductLineId === line._id
                  ? "bg-green-700 text-white"
                  : "bg-white text-black"
              }`}
            >
              {line.name}
            </button>
          ))}
        </div>
      )}

      {/* Loading state - replaces content completely */}
      {loading ? (
        <div className="w-full py-10 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-700"></div>
        </div>
      ) : (
        <>
          {/* No products message */}
          {products.length === 0 ? (
            <p className="text-center py-10">
              No products available for the selected category.
            </p>
          ) : (
            /* Products Grid */
            <div className={`flex flex-wrap gap-[50px] ${products.length % 3 <= 1? "justify-between" : "justify-start"}`}>
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={urlFor(product.heroImage).url()}
                  router={router}
                />
              ))}
            </div>
          )}
        </>
      )}
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
      className={`h-[60px] text-center border-black flex items-center justify-center 
        transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#EFEFEF]
        ${
          label === "All" ? "w-[60px] border-l-0" : "w-[200px] border-l-[0.5px]"
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
  image,
  color,
  router,
}: {
  id: string;
  name: string;
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
          alt="background"
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
        />
        <img
          src={image}
          alt={name}
          className="w-[328px] h-[184px] absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            router.push(`/quote/${id}`);
          }}
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
