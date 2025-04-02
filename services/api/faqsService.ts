import { client } from "@/sanity/lib/client";
import { FAQ } from "@/types/faqs";

export const fetchAllFAQs = async (): Promise<FAQ[]> => {
	const query = `*[_type == "faq"]{
    _id,
    question,
    answer,
    ref_links
  }`;

	try {
		const faqs = await client.fetch(query);
		return faqs;
	} catch (error) {
		console.error("Error fetching FAQs:", error);
		return [];
	}
};
