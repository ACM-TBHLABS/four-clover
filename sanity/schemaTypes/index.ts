import { type SchemaTypeDefinition } from "sanity";
import partnerships from "./partnerships";
import category from "./category";
import productLine from "./productLine";
import product from "./product";
import faqs from "./faqs";
import event from "./event";
import teamMember from "./teamMember";
import journey from "./journey";
import contacts from "./contacts";
import addresses from "./addresses";

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
		contacts,
		addresses,
	],
};
