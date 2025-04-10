"use client";
import React, { useEffect, useState } from "react";
import { fetchAllContacts } from "@/services/api/contactService";
import { Contact } from "@/types/contacts";

const IntroSection = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchContacts = async () => {
			setLoading(true);
			try {
				const data = await fetchAllContacts();
				setContacts(data);
			} catch (error) {
				console.error("Error fetching contacts:", error);
			}
			setLoading(false);
		};

		fetchContacts();
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (!contacts.length) return <h1>No contacts available.</h1>;

	return (
		<div className="flex flex-col gap-[24px]">
			<div className="border-b">
				<h1 className="font-helvetica font-normal text-[24px] md:text-[32px]">
					Contacts
				</h1>
			</div>
			<div className="flex flex-wrap md:flex-row gap-8 justify-between">
				{contacts.map((contact, index) => (
					<div
						key={contact._id || index}
						className="w-[40%] flex flex-col gap-[13px] font-helvetica"
					>
						<h1 className="font-light text-[13px] md:text-[18px] text-[#666666]">
							{contact.title}
						</h1>
						<a
							href={`mailto:${contact.email}`}
							className="font-normal text-[13px] md:text-[18px] hover:underline transition-colors duration-200"
						>
							{contact.email}
						</a>
						<a
							href={`tel:${contact.phoneNumber}`}
							className="font-normal text-[13px] md:text-[18px] hover:underline transition-colors duration-200"
						>
							{contact.phoneNumber}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default IntroSection;
