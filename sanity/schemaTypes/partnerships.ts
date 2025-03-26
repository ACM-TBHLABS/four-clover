import { defineType, defineField } from "sanity";

export default defineType({
	name: "partnership",
	type: "document",
	title: "Partnership",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) =>
				Rule.required().max(100).error("Name is required"),
		}),
		defineField({
			name: "coverPhoto",
			type: "image",
			title: "Cover Photo",
			options: {
				hotspot: true, // Enables image cropping
			},
			validation: (Rule) =>
				Rule.required().error("Cover photo is required"),
		}),
		defineField({
			name: "logo",
			type: "image",
			title: "Logo",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required().error("Logo is required"),
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			validation: (Rule) =>
				Rule.required()
					.min(10)
					.error("Description should be at least 10 characters"),
		}),
		defineField({
			name: "link",
			type: "url",
			title: "Link",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https"],
				}).error("Must be a valid URL"),
		}),
	],
});
