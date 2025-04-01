import { client } from "@/sanity/lib/client";
import { Partnership } from "@/types/partnership";

export const fetchAllPartnerships = async (): Promise<Partnership[]> => {
	const query = `*[_type == "partnership"]{
    _id,
    name,
    "coverPhoto": coverPhoto.asset->url,
    "logo": logo.asset->url,
    description,
    link
  }`;

	try {
		const partnerships = await client.fetch(query);
		return partnerships;
	} catch (error) {
		console.error("Error fetching partnerships:", error);
		return [];
	}
};
