import { client } from "@/sanity/lib/client";
import { Category } from "@/types/category";

export const fetchAllCategories = async (): Promise<Category[]> => {
	const query = `*[_type == "category"]{
    _id,
    name,
    description
  }`;

	try {
		const categories = await client.fetch(query);
		return categories;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return [];
	}
};
