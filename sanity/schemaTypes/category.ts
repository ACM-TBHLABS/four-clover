import { defineType, defineField } from "sanity";

export default defineType({
	name: "category",
	type: "document",
	title: "Category",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Category Name",
			validation: (Rule) =>
				Rule.required().max(100).error("Name is required"),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Category Description",
		}),
	],
});
