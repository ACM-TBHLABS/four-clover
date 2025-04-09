import { client } from "@/sanity/lib/client";
import { Address } from "@/types/addresses";
import { Contact } from "@/types/contacts";

export const fetchAllAddresses = async (): Promise<Address[]> => {
	const query = `*[_type == "address"] {
    _id,
    location,
    address,
    email,
    phoneNumber
  }`;

	try {
		const addresses = await client.fetch(query);
		return addresses;
	} catch (error) {
		console.error("Error fetching addresses:", error);
		return [];
	}
};

export const fetchAllContacts = async (): Promise<Contact[]> => {
	const query = `*[_type == "contact"]{
    _id,
    title,
    email,
    phoneNumber
  }`;

	try {
		const contacts = await client.fetch(query);
		return contacts;
	} catch (error) {
		console.error("Error fetching contacts:", error);
		return [];
	}
};
