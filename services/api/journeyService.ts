import { client } from "@/sanity/lib/client";
import { Journey } from "@/types/journey";

export const fetchAllJourneys = async (): Promise<Journey[]> => {
	const query = `*[_type == "journey"] | order(year asc) {
    _id,
    name,
    year,
    description,
    "journey_image": journey_image.asset->url
  }`;

	try {
		const journeys = await client.fetch(query);
		return journeys;
	} catch (error) {
		console.error("Error fetching journeys:", error);
		return [];
	}
};
