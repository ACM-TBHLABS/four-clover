import { type SchemaTypeDefinition } from "sanity";
import partnerships from "./partnerships";
import category from "./category";
import productLine from "./productLine";
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [partnerships, category, productLine, product],
};
