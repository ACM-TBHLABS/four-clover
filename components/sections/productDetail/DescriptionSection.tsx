"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/portableTextComponents";
import { Image } from "@/types/image";
import { FileAsset } from "@/types/Product";
import { getSanityFileUrl } from "@/sanity/lib/image";

interface SectionProps {
	name: string;
	title: string;
	desc: Array<
		| { _type: "block"; children: any[] } // Blocks can contain various rich text elements
		| { _type: "image"; asset: Image; alt?: string }
	>;
	colors?: any[];
	sizes?: any[];
	brochure?: FileAsset;
}

const DescriptionSection: React.FC<SectionProps> = ({
	name,
	title,
	desc,
	colors,
	sizes,
	brochure,
}) => {
	const [showLessColors, setShowLessColors] = React.useState(true);
	const [showLessSizes, setShowLessSizes] = React.useState(true);
	const handleDownload = async () => {
		if (!brochure?.asset?._ref) return;

		const url = getSanityFileUrl(brochure.asset._ref);

		try {
			const res = await fetch(url);
			const blob = await res.blob();
			const link = document.createElement("a");

			link.href = window.URL.createObjectURL(blob);
			link.download = `${name.toLowerCase().replace(/\s+/g, "-")}-brochure.pdf`;
			document.body.appendChild(link);
			link.click();
			link.remove();
		} catch (err) {
			console.error("Failed to download brochure:", err);
		}
	};

	return (
		<div className="py-[100px] flex gap-[10px] relative">
			<div className="w-full flex flex-col gap-2 md:gap-5 relative">
				<h1 className="font-helvetica font-bold text-[32px] leading-[1.1]">
					{title}
				</h1>
				<div className="font-helvetica">
					<PortableText
						value={desc}
						components={portableTextComponents}
					/>
				</div>
				{(colors ?? []).length > 0 && (
					<div className="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
						<h1 className="font-helvetica font-normal text-[32px] leading-[1.1]">
							Colors
						</h1>
						<div className="flex flex-wrap gap-2 md:gap-5">
							{colors
								?.slice(0, showLessColors ? 5 : colors.length)
								?.map((color, index) => {
									return (
										<div
											key={index}
											className="flex flex-col items-center gap-1"
										>
											<div
												className="w-20 h-20 rounded-lg border-[1px] border-[#666666] flex justify-center items-center"
												style={{
													backgroundColor:
														color.code.includes("#")
															? color.code
															: `#${color.code}`,
												}}
											></div>
											<span className="text-[16px] font-helvetica">
												{color.name}
											</span>
										</div>
									);
								})}
							{(colors?.length ?? 0) > 5 && (
								<div className="flex flex-col items-center gap-1">
									<button
										className="h-full text-[16px] font-helvetica text-[#666666] opacity-50 hover:opacity-100 transition-opacity duration-200"
										onClick={() =>
											setShowLessColors(!showLessColors)
										}
									>
										{showLessColors
											? "Show more"
											: "Show less"}
									</button>
									<span className="text-[16px] font-helvetica opacity-0">
										-
									</span>
								</div>
							)}
						</div>
					</div>
				)}

				{(sizes ?? []).length > 0 && (
					<div className="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
						<h1 className="font-helvetica font-normal text-[32px] leading-[1.1]">
							Sizes
						</h1>
						<div className="flex flex-wrap gap-2 md:gap-5">
							{sizes
								?.slice(0, showLessSizes ? 5 : sizes.length)
								?.map((size, index) => {
									return (
										<div
											key={index}
											className="min-w-20 flex flex-col items-center gap-1 p-2 border-[1px] border-[#666666] rounded-lg"
										>
											<span className="text-[16px] font-helvetica">
												{size.name}
											</span>
										</div>
									);
								})}
							{(sizes?.length ?? 0) > 5 && (
								<div className="flex flex-col items-center gap-1">
									<button
										className="h-full text-[16px] font-helvetica text-[#666666] opacity-50 hover:opacity-100 transition-opacity duration-200"
										onClick={() =>
											setShowLessSizes(!showLessSizes)
										}
									>
										{showLessSizes
											? "Show more"
											: "Show less"}
									</button>
								</div>
							)}
						</div>
					</div>
				)}
				{brochure?.asset?._ref && (
					<div className="mt-4">
						<button
							onClick={handleDownload}
							className="px-3 py-2 lg:px-[20px] lg:py-2 transition-all group hover:scale-[1.02] hover:cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out rounded-[5px] border-black border-[0.5px]"
						>
							Download Product Brochure
						</button>
					</div>
				)}
			</div>
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] border-b-[1px] border-[#666666]"></div>
		</div>
	);
};

export default DescriptionSection;
