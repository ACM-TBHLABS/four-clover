import { Product } from "./Product";
import { Category } from "./category";

export interface ProductLine {
	_id: string;
	category: Category;
	name: string;
	description: string;
	tagline: string;
	products?: Product[];
	priority?: number;
}
