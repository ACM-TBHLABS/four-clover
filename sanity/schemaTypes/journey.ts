// schemas/journey.ts
import { defineType, defineField } from "sanity";

export default defineType({
	name: "journey",
	type: "document",
	title: "Journey",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) => Rule.required().error("Name is required"),
		}),
		defineField({
			name: "year",
			type: "number",
			title: "Year",
			validation: (Rule) =>
				Rule.required()
					.min(1900)
					.max(new Date().getFullYear() + 10)
					.error("Please enter a valid year"),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			validation: (Rule) =>
				Rule.required()
					.max(500)
					.warning("Keep it under 500 characters"),
		}),
		defineField({
			name: "journey_image",
			type: "image",
			title: "Journey Image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required().error("Image is required"),
		}),
	],
});
