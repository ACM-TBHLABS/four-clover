import { type SchemaTypeDefinition } from "sanity";
import partnerships from "./partnerships";
import category from "./category";
import productLine from "./productLine";
import product from "./product";
import faqs from "./faqs";
import event from "./event";
import teamMember from "./teamMember";
import journey from "./journey";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		partnerships,
		category,
		productLine,
		product,
		faqs,
		event,
		teamMember,
		journey,
	],
};
