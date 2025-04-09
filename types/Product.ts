import { Image } from "./Image";

export interface ProductFAQ {
	question: string;
	answer: string;
}

export interface Product {
	_id: string;
	name: string;
	slug: string;
	description?: Array<
		| { _type: "block"; children: any[] } // Blocks can contain various rich text elements
		| { _type: "image"; asset: Image; alt?: string }
	>;
	tagline: string;
	price: number;
	heroImage: Image;
	images?: Image[];
	discount?: number;
	ref_link?: string; // Optional URL
	brand?: string;
	recommendedProducts?: Product[];
	productFaqs?: ProductFAQ[];
}
