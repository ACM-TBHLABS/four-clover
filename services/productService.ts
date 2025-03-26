"use server";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/Product";

export const fetchAllProducts = async (): Promise<Product[]> => {
	return await client.fetch(`*[_type == "product"]`);
};
