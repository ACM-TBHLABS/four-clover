import { type SchemaTypeDefinition } from "sanity";
import partnerships from "./partnerships";
import category from "./category";
import productLine from "./productLine";
import product from "./product";
import faqs from "./faqs";
import event from "./event";
import training from "./training";
import teamMember from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		partnerships,
		category,
		productLine,
		product,
		faqs,
		event,
		training,
		teamMember,
	],
};
