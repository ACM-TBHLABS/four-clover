import { defineType, defineField } from "sanity";

export default defineType({
	name: "productLine",
	type: "document",
	title: "Product Line",
	fields: [
		defineField({
			name: "category",
			type: "reference",
			title: "Category",
			to: [{ type: "category" }],
			validation: (Rule) => Rule.required().error("Category is required"),
		}),
		defineField({
			name: "name",
			type: "string",
			title: "Product Line Name",
			validation: (Rule) =>
				Rule.required().max(100).error("Name is required"),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Product Line Description",
			validation: (Rule) =>
				Rule.required()
					.min(10)
					.error("Description should be at least 10 characters"),
		}),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
			validation: (Rule) =>
				Rule.required().max(150).warning("Keep it concise"),
		}),
		defineField({
			name: "products",
			type: "array",
			title: "Products",
			of: [{ type: "reference", to: [{ type: "product" }] }],
		}),
		defineField({
			name: "priority",
			type: "number",
			title: "Priority",
			description:
				"Optional field to determine order. Must be unique if set.",
			validation: (Rule) =>
				Rule.min(1)
					.error(
						"Priority must be a positive number or the number is repeated"
					)
					.custom(async (value, context) => {
						if (!value) return true; // Make the field optional

						const { document, getClient } = context;
						const client = getClient({ apiVersion: "2023-03-01" });

						// Check if another productLine already has the same priority
						const existingDocs = await client.fetch(
							`*[_type == "productLine" && priority == $priority && _id != $id]`,
							{ priority: value, id: document?._id }
						);

						return existingDocs.length > 0
							? "This priority number is already in use. Please choose a different one."
							: true;
					}),
		}),
	],
});
