"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllJourneys } from "@/services/api/journeyService";
import { Journey } from "@/types/journey";
import React, { useEffect, useState } from "react";

const OurJourney = () => {
	const [journeys, setJourneys] = useState<Journey[]>([]);
	const [loading, setLoading] = useState(false);
	const [selectedItem, setSelectedItem] = useState<Journey | null>(null);

	useEffect(() => {
		const fetchJourneys = async () => {
			setLoading(true);
			try {
				const data = await fetchAllJourneys();
				setJourneys(data);
				setSelectedItem(data[0]); // Set the first journey as the default selected one
			} catch (error) {
				console.error("Error fetching journey data:", error);
			}
			setLoading(false);
		};

		fetchJourneys();
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (!journeys.length) return <h1>No journey data available.</h1>;

	return (
		<div className="flex flex-col justify-start items-start">
			<div className="w-full h-fit lg:h-[600px] flex flex-col lg:flex-row-reverse justify-start items-start">
				<div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-1">
					<img
						src={
							selectedItem
								? urlFor(selectedItem.journey_image).url()
								: ""
						}
						alt={selectedItem?.name || "Journey"}
						className="w-full h-[300px] object-cover"
					/>
					<p className="w-full text-[18px] lg:text-[24px] font-helvetica font-light">
						{selectedItem?.description}
					</p>
				</div>

				<div className="w-full lg:w-1/2 h-full flex flex-col px-0 lg:px-[50px] py-[20px] lg:py-[100px]">
					<h1 className="font-helvetica font-normal text-[42px] lg:text-[72px] whitespace-nowrap">
						Our Journey
					</h1>

					<div className="w-full h-full flex flex-row lg:flex-col justify-start items-end overflow-x-scroll gap-8 lg:gap-0 lg:overflow-x-visible">
						{journeys.map((item, index) => (
							<div
								key={item._id || index}
								className="flex flex-col gap-1 cursor-pointer group"
								onClick={() => setSelectedItem(item)}
							>
								<p
									className={`${
										selectedItem?.year === item.year
											? "lg:text-[40px] lg:font-normal"
											: "lg:text-[18px] lg:font-light lg:text-gray-500"
									} group-hover:scale-110 group-hover:text-black duration-300`}
								>
									{item.year}
								</p>

								{/* Mobile view below the year */}
								<div className="lg:hidden min-w-[300px] h-fit flex flex-col justify-center items-start gap-1">
									<img
										src={urlFor(item.journey_image).url()}
										alt={item.name}
										className="w-full h-[200px] object-cover"
									/>
									<p className="w-full text-[18px] lg:text-[24px] font-helvetica font-light">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurJourney;
