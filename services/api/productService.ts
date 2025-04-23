import { client } from "@/sanity/lib/client";
import { Product } from "@/types/Product";

// Fetch all products
export const fetchAllProducts = async (): Promise<Product[]> => {
	const query = `*[_type == "product"] | order(name asc){
    _id,
    name,
    "slug": slug.current,
    description,
    tagline,
    price,
    "heroImage": heroImage.asset->url,
    "images": images[].asset->url,
    discount,
    ref_link,
    brand,
    productFaqs,
    colors,
    sizes
  }`;

	try {
		const products = await client.fetch(query);
		return products;
	} catch (error) {
		console.error("Error fetching products:", error);
		return [];
	}
};

// Fetch a specific product by its slug
export const fetchProductBySlug = async (
	slug: string
): Promise<Product | null> => {
	const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    description,
    tagline,
    price,
    "heroImage": heroImage.asset->url,
    "images": images[].asset->url,
    discount,
    ref_link,
    brand,
    recommendedProducts[]->{
      _id,
      name,
      "slug": slug.current,
      description,
      tagline,
      price,
      "heroImage": heroImage.asset->url,
      "images": images[].asset->url,
      discount,
      ref_link,
      brand,
      productFaqs,
    },
    productFaqs,
    colors,
    sizes,
    brochure
  }`;
	try {
		const product = await client.fetch(query, { slug });
		return product;
	} catch (error) {
		console.error(`Error fetching product with slug ${slug}:`, error);
		return null;
	}
};

export const fetchProductsByProductLineId = async (
	productLineId: string
): Promise<Product[]> => {
	const query = `*[_type == "product" && _id in *[_type == "productLine" && _id == $productLineId][0].products[]._ref] {
  _id,
  name,
  "slug": slug.current,
  description,
  tagline,
  price,
  "heroImage": heroImage.asset->url,
  "images": images[].asset->url,
  discount,
  ref_link,
  brand,
  productFaqs
}`;

	const params = { productLineId };

	try {
		const products = await client.fetch(query, params);
		return products;
	} catch (error) {
		console.error(
			`Error fetching products for product line ${productLineId}:`,
			error
		);
		return [];
	}
};
