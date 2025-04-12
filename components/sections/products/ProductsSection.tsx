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
import ProductCard from "@/components/ProductCard";

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
				allProducts.sort((a, b) => a.name.localeCompare(b.name));
				// allProducts.sort(a, b => a.name.localeCompare(b.name));
				setProducts(allProducts);
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
	console.log("categories", categories);
	console.log("productLines", productLines);
	console.log("products", products);
	console.log("ActiveLineId", activeProductLineId);
	// Handle product line selection
	const handleProductLineChange = async (productLineId: string) => {
		if (activeProductLineId === productLineId) return;

		// Clear products and show loading state
		setProducts([]);
		setLoading(true);
		setActiveProductLineId(productLineId);

		try {
			const lineProducts =
				await fetchProductsByProductLineId(productLineId);
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
			: productLines.filter(
					(product) => product.category.name === activeTab
				);

	// Show loading indicator while initial data is loading
	if (loading && categories.length === 0) {
		return <p>Loading product lines...</p>;
	}

	return (
		<div className="w-full flex flex-col gap-5 lg:gap-[50px]">
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
							activeTab === "All"
								? "text-black"
								: "text-green-700"
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
						/* Products Grid - 3 columns */
						<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{products.map((product) => (
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
			label === "All"
				? "w-[60px] border-l-0"
				: "w-[200px] border-l-[0.5px]"
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
