import { Image } from "./Image";

export interface Product {
	_id: string;
	productName: string;
	productHeroImage: Image;
	productImages?: Image[];
	productDescription: string;
	productSKU: string;
	productCategory: "dental-aligners" | "chairs" | "implants" | "3d-scanners";
}
