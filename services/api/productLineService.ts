import { client } from "@/sanity/lib/client";
import { ProductLine } from "@/types/productLine";

export const fetchAllProductLines = async (): Promise<ProductLine[]> => {
	const query = `*[_type == "productLine"] | order(priority asc) {
    _id,
    name,
    description,
    tagline,
    priority,
    "category": category->{
      _id,
      name
    },
    "products": products[]->{
      _id,
      name,
      "slug": slug.current,
      description,
      price,
      "heroImage": heroImage.asset->url,
    }
  }`;

	try {
		const productLines = await client.fetch(query);
		return productLines;
	} catch (error) {
		console.error("Error fetching product lines:", error);
		return [];
	}
};

export const fetchProductLinesByCategoryId = async (
	categoryId: string
): Promise<ProductLine[]> => {
	const query = `*[_type == "productLine" && category._ref == $categoryId] {
    _id,
    name,
    description,
    tagline,
    priority,
    "category": category->{
      _id,
      name
    },
    "products": products[]->{
      _id,
      name,
      "slug": slug.current,
      description,
      price,
      "heroImage": heroImage.asset->url,
    }
  }`;

	const params = { categoryId };

	try {
		const productLines = await client.fetch(query, params);
		return productLines;
	} catch (error) {
		console.error(
			`Error fetching product lines for category ${categoryId}:`,
			error
		);
		return [];
	}
};
