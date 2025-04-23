import { Image } from "./image";

export interface ProductFAQ {
	question: string;
	answer: string;
}

export interface FileAsset {
	_type: "file";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

export interface Product {
	_id: string;
	name: string;
	slug: string;
	description?: Array<
		| { _type: "block"; children: any[] }
		| { _type: "image"; asset: Image; alt?: string }
	>;
	tagline: string;
	price: number;
	heroImage: Image;
	images?: Image[];
	discount?: number;
	ref_link?: string;
	brand?: string;
	recommendedProducts?: Product[];
	productFaqs?: ProductFAQ[];
	brochure?: FileAsset;
}
