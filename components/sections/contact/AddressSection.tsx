"use client";
import React, { useEffect, useState } from "react";
import { fetchAllAddresses } from "@/services/api/contactService";
import { Address } from "@/types/addresses";

const AddressSection = () => {
	const [addresses, setAddresses] = useState<Address[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchAddresses = async () => {
			setLoading(true);
			try {
				const data = await fetchAllAddresses();
				setAddresses(data);
			} catch (error) {
				console.error("Error fetching addresses:", error);
			}
			setLoading(false);
		};

		fetchAddresses();
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (!addresses.length) return <h1>No addresses found.</h1>;

	return (
		<div className="flex flex-col gap-[24px]">
			<div className="border-b">
				<h1 className="font-helvetica font-normal text-[24px] md:text-[32px]">
					Addresses
				</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-[24px] md:gap-[50px] justify-between">
				{addresses.map((addr, index) => (
					<div
						key={addr._id || index}
						className="flex flex-col gap-[4px] font-helvetica font-normal text-[13px] md:text-[18px]"
					>
						<h1>{addr.location}</h1>
						<h1>{addr.address}</h1>
						<a
							href={`tel:${addr.phoneNumber}`}
							className="hover:underline transition-colors duration-200"
						>
							{addr.phoneNumber}
						</a>
						<a
							href={`mailto:${addr.email}`}
							className="hover:underline transition-colors duration-200"
						>
							{addr.email}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddressSection;
