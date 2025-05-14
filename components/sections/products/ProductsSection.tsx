"use client";
import React, { useEffect, useState, useRef } from "react";
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
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  // warning: 80% Vibe Coded. If you cant fix it, Claudes Sonnet 3.7 can
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [productLines, setProductLines] = useState<ProductLine[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("");
  const [activeProductLineId, setActiveProductLineId] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Show 9 products per page (3x3 grid)
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the section top

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
        setFilteredProducts(allProducts);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Filter products when search query changes
  useEffect(() => {
    if (products.length > 0) {
      if (searchQuery.trim() === "") {
        setFilteredProducts(products);
      } else {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
      }
      setCurrentPage(1); // Reset to first page on search
    }
  }, [searchQuery, products]);

  // Handle tab changes
  const handleTabChange = async (tabName: string) => {
    if (activeTab === tabName) return;

    // Clear products and show loading state
    setProducts([]);
    setFilteredProducts([]);
    setLoading(true);
    setActiveTab(tabName);
    setSearchQuery(""); // Reset search query on tab change
    setCurrentPage(1); // Reset to first page on tab change

    try {
      if (tabName === "All") {
        // For "All" tab, fetch all products without filtering
        const allProducts = await fetchAllProducts();
        allProducts.sort((a, b) => a.name.localeCompare(b.name));
        // allProducts.sort(a, b => a.name.localeCompare(b.name));
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } else {
        // For category tabs, get all product lines for this category
        let filtered = productLines.filter(
          (product) => product.category.name === tabName
        );

        // Sort product lines by priority (handling undefined values)
        // Items with undefined priority will be placed at the end
        filtered = filtered.sort((a, b) => {
          // If both have priority, sort normally (higher number first)
          if (a.priority !== undefined && b.priority !== undefined) {
            return b.priority - a.priority;
          }
          // If only a has priority, a comes first
          if (a.priority !== undefined) {
            return -1;
          }
          // If only b has priority, b comes first
          if (b.priority !== undefined) {
            return 1;
          }
          // If neither has priority, maintain original order
          return 0;
        });

        if (filtered.length > 0) {
          // Set the active product line ID to the highest priority one
          const highestPriorityProductLineId = filtered[0]._id;
          setActiveProductLineId(highestPriorityProductLineId);

          // Only fetch products for the selected product line
          const lineProducts = await fetchProductsByProductLineId(
            highestPriorityProductLineId
          );
          setProducts(lineProducts);
          setFilteredProducts(lineProducts);
        } else {
          // No product lines for this category
          setProducts([]);
          setFilteredProducts([]);
        }
      }
    } catch (error) {
      console.error(`Error fetching products for tab ${tabName}:`, error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };
  console.log("categories", categories);
  console.log("productLines", productLines);
  console.log("products", products);
  console.log("ActiveLineId", activeProductLineId);
  // Handle product line selection
  const handleProductLineChange = async (productLineId: string) => {
    if (activeProductLineId === productLineId) return;

    // Clear products and show loading state
    setProducts([]);
    setFilteredProducts([]);
    setLoading(true);
    setActiveProductLineId(productLineId);
    setSearchQuery(""); // Reset search query on product line change
    setCurrentPage(1); // Reset to first page on product line change

    try {
      const lineProducts = await fetchProductsByProductLineId(productLineId);
      setProducts(lineProducts);
      setFilteredProducts(lineProducts);
    } catch (error) {
      console.error(
        `Error fetching products for product line ${productLineId}:`,
        error
      );
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Get filtered product lines for UI
  const filteredProductLines =
    activeTab === "All"
      ? [] // Don't show product line filters in "All" tab
      : productLines.filter((product) => product.category.name === activeTab);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // if (sectionRef.current) {
    //   const width = window.innerWidth;
    //   let yOffset = -100; // default for lg and up

    //   if (width < 768) {
    //     // base (mobile)
    //     yOffset = -32;
    //   } else if (width >= 768 && width <= 9999) {
    //     // md
    //     yOffset = -50;
    //   } else {
    //     // lg and above
    //     yOffset = -100;
    //   }

    //   const y =
    //     sectionRef.current.getBoundingClientRect().top +
    //     window.pageYOffset +
    //     yOffset;

    //   window.scrollTo({ top: y, behavior: "smooth" });
    // }
    if (sectionRef.current) {
      let yOffset = -50;
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      if (window.innerWidth < 768) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Show loading indicator while initial data is loading
  if (loading && categories.length === 0) {
    return <p>Loading product lines...</p>;
  }

  return (
    <div ref={sectionRef} className="w-full flex flex-col gap-5 lg:gap-[25px]">
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

      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading state - replaces content completely */}
      {loading ? (
        <div className="w-full py-10 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-700"></div>
        </div>
      ) : (
        <>
          {/* No products message */}
          {filteredProducts.length === 0 ? (
            <p className="text-center py-10">
              {searchQuery.trim() !== ""
                ? `No products found matching "${searchQuery}".`
                : "No products available for the selected category."}
            </p>
          ) : (
            /* Products Grid - 3 columns */
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={urlFor(product.heroImage).url()}
                  router={router}
                  slug={product.slug}
                />
              ))}
            </div>
          )}
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-md bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
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

export default ProductsSection;
