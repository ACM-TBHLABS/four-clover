import { Image } from "./Image";

export interface ProductFAQ {
	question: string;
	answer: string;
}

export interface Product {
	_id: string;
	name: string;
	slug: string;
	description: string;
	tagline: string;
	price: number;
	heroImage: Image;
	images?: Image[];
	discount?: number;
	ref_link?: string; // Optional URL
	brand?: string;
	productFaqs?: ProductFAQ[];
}
