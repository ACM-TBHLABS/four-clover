"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import React, { useEffect, useState } from "react";

const PartnersSection = () => {
	const [partnerImages, setPartnerImages] = useState<
		{ imagePath: string; link?: string }[]
	>([]);

	useEffect(() => {
		const fetchPartnerships = async () => {
			const res = await fetchAllPartnerships();

			// Take ALL partnerships, extract logo and optional link
			const formatted = res.map((partnership) => ({
				imagePath: urlFor(partnership.logo).url(),
				link: partnership.link ?? undefined,
			}));

			setPartnerImages(formatted);
		};

		fetchPartnerships();
	}, []);

	return (
		<div className="p-[24px] md:p-[50px] lg:px-[150px] flex flex-col">
			<h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] leading-[1.1]">
				Trusted Collaborators
			</h1>

			<div className="overflow-hidden">
				<InfiniteMovingCards
					items={partnerImages}
					direction="left"
					speed="fast"
				/>
			</div>
		</div>
	);
};

export default PartnersSection;
